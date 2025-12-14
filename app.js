// 中藥心靈療癒卡 - 主應用程式

class TCMOracleApp {
    constructor() {
        this.currentScreen = 'home-screen';
        this.selectedIntention = null;
        this.drawnCard = null;
        this.isCardFlipped = false;
        
        this.init();
    }
    
    init() {
        this.createParticles();
        this.bindEvents();
    }
    
    // 創建粒子背景
    createParticles() {
        const container = document.getElementById('particles');
        const particleCount = 30;
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 8 + 's';
            particle.style.animationDuration = (6 + Math.random() * 4) + 's';
            container.appendChild(particle);
        }
    }
    
    // 綁定事件
    bindEvents() {
        // 開始按鈕
        document.getElementById('start-btn').addEventListener('click', () => {
            this.navigateTo('intention-screen');
        });
        
        // 返回按鈕
        document.querySelectorAll('.back-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const target = e.target.dataset.target;
                this.navigateTo(target);
            });
        });
        
        // 意圖卡片
        document.querySelectorAll('.intention-card').forEach(card => {
            card.addEventListener('click', (e) => {
                this.selectedIntention = e.currentTarget.dataset.intention;
                this.prepareDrawScreen();
                this.navigateTo('draw-screen');
            });
        });
        
        // 抽牌卡片
        document.getElementById('draw-card').addEventListener('click', () => {
            if (!this.isCardFlipped) {
                this.flipCard();
            }
        });
        
        // 再抽一張
        document.getElementById('draw-again-btn').addEventListener('click', () => {
            this.resetDraw();
            this.navigateTo('intention-screen');
        });
        
        // 結束按鈕
        document.getElementById('finish-btn').addEventListener('click', () => {
            this.resetAll();
            this.navigateTo('home-screen');
        });
    }
    
    // 頁面導航
    navigateTo(screenId) {
        const currentScreenEl = document.getElementById(this.currentScreen);
        const targetScreenEl = document.getElementById(screenId);
        
        // 退出動畫
        currentScreenEl.classList.add('exit');
        currentScreenEl.classList.remove('active');
        
        // 進入動畫
        setTimeout(() => {
            currentScreenEl.classList.remove('exit');
            targetScreenEl.classList.add('active');
            this.currentScreen = screenId;
            
            // 滾動到頂部
            targetScreenEl.scrollTop = 0;
        }, 300);
    }
    
    // 準備抽牌畫面
    prepareDrawScreen() {
        this.drawnCard = drawRandomCard();
        this.isCardFlipped = false;
        
        // 重置卡片狀態
        const drawCard = document.getElementById('draw-card');
        drawCard.classList.remove('flipped', 'flipping');
        
        // 顯示提示
        document.getElementById('draw-hint').classList.remove('hidden');
        
        // 預載入結果圖片
        const resultCardFront = document.getElementById('result-card-front');
        resultCardFront.innerHTML = `<img src="${this.drawnCard.image}" alt="${this.drawnCard.name}" class="draw-card-img">`;
    }
    
    // 翻牌
    flipCard() {
        this.isCardFlipped = true;
        const drawCard = document.getElementById('draw-card');
        
        // 添加光暈效果
        drawCard.classList.add('flipping');
        
        // 翻轉卡片
        setTimeout(() => {
            drawCard.classList.add('flipped');
        }, 100);
        
        // 隱藏提示
        document.getElementById('draw-hint').classList.add('hidden');
        
        // 延遲後顯示結果
        setTimeout(() => {
            this.showResult();
        }, 1200);
    }
    
    // 顯示結果
    showResult() {
        // 設置卡片圖片
        document.getElementById('result-card-img').src = this.drawnCard.image;
        document.getElementById('result-card-img').alt = this.drawnCard.name;
        
        // 設置基本資訊
        document.getElementById('herb-category').textContent = this.drawnCard.category;
        document.getElementById('herb-name').textContent = this.drawnCard.name;
        document.getElementById('herb-latin').textContent = this.drawnCard.latinName;
        document.getElementById('herb-properties').textContent = this.drawnCard.properties;
        document.getElementById('herb-body').textContent = this.drawnCard.bodyEffects;
        document.getElementById('herb-context').textContent = this.drawnCard.emotionalContext;
        document.getElementById('herb-affirmation').textContent = this.drawnCard.healingAffirmation;
        
        // 設置解讀整合
        const integration = integrationMessages[this.selectedIntention];
        document.getElementById('integration-content').innerHTML = integration.getReading(this.drawnCard);
        
        // 導航到結果頁面
        this.navigateTo('result-screen');
    }
    
    // 重置抽牌狀態
    resetDraw() {
        this.drawnCard = null;
        this.isCardFlipped = false;
        this.selectedIntention = null;
    }
    
    // 完全重置
    resetAll() {
        this.resetDraw();
    }
}

// 頁面載入完成後初始化
document.addEventListener('DOMContentLoaded', () => {
    new TCMOracleApp();
});

// 中藥心靈療癒卡 - 卡片資料
const cardsData = {
  "收斂類": [
    {
      "name": "烏梅",
      "latinName": "Prunus mume",
      "category": "收斂類",
      "properties": "酸、澀、平，收斂生津",
      "bodyEffects": "斂肺止咳、澀腸止瀉、生津止渴",
      "emotionalContext": "情緒外洩、無法收心、需要內省",
      "healingAffirmation": "收斂向外擴散的情緒，引導你回到內在的寧靜",
      "image": "images/astringent/烏梅.png"
    },
    {
      "name": "五味子",
      "latinName": "Schisandra chinensis",
      "category": "收斂類",
      "properties": "酸、甘、溫，收斂固澀",
      "bodyEffects": "斂肺止咳、滋腎澀精、止汗",
      "emotionalContext": "思緒紛亂、難以專注、感覺失焦",
      "healingAffirmation": "讓散落的能量回到核心，重新找到你的中心",
      "image": "images/astringent/五味子.png"
    },
    {
      "name": "山茱萸",
      "latinName": "Cornus officinalis",
      "category": "收斂類",
      "properties": "酸、澀、微溫，收斂固澀",
      "bodyEffects": "補肝腎、澀精固脫、止汗",
      "emotionalContext": "能量耗散、精力流失、難以持守",
      "healingAffirmation": "收攝流散的生命力，幫助你守護內在資源",
      "image": "images/astringent/山茱萸.png"
    },
    {
      "name": "蓮子",
      "latinName": "Nelumbo nucifera",
      "category": "收斂類",
      "properties": "甘、澀、平，養心安神",
      "bodyEffects": "補脾止瀉、養心安神、固腎",
      "emotionalContext": "心神不寧、思慮過多、難以安定",
      "healingAffirmation": "讓紛擾的心念沉澱，在寧靜中找回內心的清明",
      "image": "images/astringent/蓮子.png"
    },
    {
      "name": "覆盆子",
      "latinName": "Rubus chingii",
      "category": "收斂類",
      "properties": "甘、酸、微溫，補腎固精",
      "bodyEffects": "補肝腎、固精縮尿、明目",
      "emotionalContext": "生命力減弱、缺乏動力、視野模糊",
      "healingAffirmation": "滋養你的生命根基，重新點亮內在的光明",
      "image": "images/astringent/覆盆子.png"
    },
    {
      "name": "金櫻子",
      "latinName": "Rosa laevigata",
      "category": "收斂類",
      "properties": "酸、澀、平，固精縮尿",
      "bodyEffects": "固精縮尿、澀腸止瀉、固崩帶",
      "emotionalContext": "界限模糊、能量外漏、需要防護",
      "healingAffirmation": "建立你的能量邊界，守護內在的珍貴資源",
      "image": "images/astringent/金櫻子.png"
    }
  ],
  "溫熱類": [
    {
      "name": "桂圓",
      "latinName": "Dimocarpus longan",
      "category": "溫熱類",
      "properties": "甘、溫，歸心、脾經",
      "bodyEffects": "補益心脾、養血安神、益智健腦",
      "emotionalContext": "思慮過度、失眠多夢、情感匱乏",
      "healingAffirmation": "我的心靈充滿甜美與喜悅，放下擔憂讓內在平靜安穩",
      "image": "images/warming/桂圓.png"
    },
    {
      "name": "生薑",
      "latinName": "Zingiber officinale",
      "category": "溫熱類",
      "properties": "辛、微溫，歸肺、脾、胃經",
      "bodyEffects": "發汗解表、溫中止嘔、溫肺止咳",
      "emotionalContext": "受困於過去、消化不良情緒、缺乏動力",
      "healingAffirmation": "我釋放陳舊的模式和束縛，以溫暖的力量開創新局",
      "image": "images/warming/生薑.png"
    },
    {
      "name": "當歸",
      "latinName": "Angelica sinensis",
      "category": "溫熱類",
      "properties": "甘、辛、溫，歸肝、心、脾經",
      "bodyEffects": "補血活血、調經止痛、潤腸通便",
      "emotionalContext": "情感阻滯、創造力枯竭、無法流動",
      "healingAffirmation": "我允許愛與創造力自由流動，滋養生命中每個需要的部分",
      "image": "images/warming/當歸.png"
    },
    {
      "name": "紅棗",
      "latinName": "Ziziphus jujuba",
      "category": "溫熱類",
      "properties": "甘、溫，歸脾、胃、心經",
      "bodyEffects": "補中益氣、養血安神、緩和藥性",
      "emotionalContext": "心神不安、疲憊無力、需要滋養",
      "healingAffirmation": "我值得被溫柔地對待滋養，允許自己休息並恢復能量",
      "image": "images/warming/紅棗.png"
    },
    {
      "name": "肉桂",
      "latinName": "Cinnamomum cassia",
      "category": "溫熱類",
      "properties": "辛、甘、熱，歸腎、脾、心、肝經",
      "bodyEffects": "溫補腎陽、散寒止痛、溫通經絡",
      "emotionalContext": "缺乏行動力、畏寒退縮、情感冷漠",
      "healingAffirmation": "我允許內在的熱情被點燃，勇敢走出舒適圈迎向生命",
      "image": "images/warming/肉桂.png"
    },
    {
      "name": "艾草",
      "latinName": "Artemisia argyi",
      "category": "溫熱類",
      "properties": "苦、辛、溫，歸肝、脾、腎經",
      "bodyEffects": "溫經止血、散寒止痛、除濕驅邪",
      "emotionalContext": "負能量纏身、界線模糊、需要淨化",
      "healingAffirmation": "我淨化身心建立健康界線，保護自己的能量不被耗損",
      "image": "images/warming/艾草.png"
    }
  ],
  "寒涼類": [
    {
      "name": "百合",
      "latinName": "Lilium brownii",
      "category": "寒涼類",
      "properties": "寒、甘、養陰潤肺",
      "bodyEffects": "養陰潤肺、清心安神、止咳化痰",
      "emotionalContext": "情緒乾涸、心肺受損、需要滋養",
      "healingAffirmation": "用溫柔滋養乾涸的心靈，讓內在重新豐盈柔軟",
      "image": "images/cooling/百合.png"
    },
    {
      "name": "綠豆",
      "latinName": "Vigna radiata",
      "category": "寒涼類",
      "properties": "寒、甘、清熱解毒",
      "bodyEffects": "清熱解毒、消暑除煩、利水消腫",
      "emotionalContext": "內心燥熱、情緒中毒、需要淨化",
      "healingAffirmation": "清除心中的毒素和煩躁，讓內在重新變得純淨清涼",
      "image": "images/cooling/綠豆.png"
    },
    {
      "name": "菊花",
      "latinName": "Chrysanthemum morifolium",
      "category": "寒涼類",
      "properties": "寒、甘、苦、疏散風熱",
      "bodyEffects": "清肝明目、疏散風熱、平肝陽",
      "emotionalContext": "情緒煩躁、思緒過熱、眼睛疲勞",
      "healingAffirmation": "讓心中的燥熱沉靜下來，用清明的眼光看待世界",
      "image": "images/cooling/菊花.png"
    },
    {
      "name": "蓮子心",
      "latinName": "Nelumbo nucifera",
      "category": "寒涼類",
      "properties": "平、甘澀、清心安神",
      "bodyEffects": "養心安神、益腎固精、補脾止瀉",
      "emotionalContext": "心神不寧、失眠多夢、焦慮不安",
      "healingAffirmation": "在混沌中找到寧靜的核心，讓心回到蓮花般的純淨",
      "image": "images/cooling/蓮子.png"
    },
    {
      "name": "薄荷",
      "latinName": "Mentha haplocalyx",
      "category": "寒涼類",
      "properties": "涼、辛、疏散風熱",
      "bodyEffects": "疏散風熱、清利頭目、利咽透疹",
      "emotionalContext": "思緒混沌、頭腦昏沉、需要清醒",
      "healingAffirmation": "為你的思緒帶來清新，讓心智重獲清晰的力量",
      "image": "images/cooling/薄荷.png"
    },
    {
      "name": "金銀花",
      "latinName": "Lonicera japonica",
      "category": "寒涼類",
      "properties": "寒、甘、清熱解毒",
      "bodyEffects": "清熱解毒、疏散風熱、涼血止痢",
      "emotionalContext": "情緒發炎、人際衝突、需要消炎",
      "healingAffirmation": "療癒人際關係中的發炎傷口，帶來金銀般的珍貴和解",
      "image": "images/cooling/金銀花.png"
    }
  ],
  "補益類": [
    {
      "name": "人參",
      "latinName": "Panax ginseng",
      "category": "補益類",
      "properties": "甘、微苦、微溫，歸脾、肺、心經",
      "bodyEffects": "大補元氣、補脾益肺、生津安神",
      "emotionalContext": "生命力衰微、心神耗竭、需要深度復原",
      "healingAffirmation": "我重新點燃生命的火焰，讓元氣充盈於全身",
      "image": "images/tonifying/人參.png"
    },
    {
      "name": "山藥",
      "latinName": "Dioscorea polystachya",
      "category": "補益類",
      "properties": "甘、平，歸脾、肺、腎經",
      "bodyEffects": "補脾養胃、生津益肺、補腎澀精",
      "emotionalContext": "消化不良、吸收困難、需要溫和調理",
      "healingAffirmation": "我溫和地接納生命的滋養，讓身心平衡而和諧",
      "image": "images/tonifying/山藥.png"
    },
    {
      "name": "枸杞",
      "latinName": "Lycium barbarum",
      "category": "補益類",
      "properties": "甘、平，歸肝、腎經",
      "bodyEffects": "滋補肝腎、益精明目、養血潤肺",
      "emotionalContext": "視野模糊、方向不明、需要清晰洞見",
      "healingAffirmation": "我以清晰的眼光看見真相，用智慧滋養內在的光明",
      "image": "images/tonifying/枸杞.png"
    },
    {
      "name": "白木耳",
      "latinName": "Tremella fuciformis",
      "category": "補益類",
      "properties": "甘、淡、平，歸肺、胃、腎經",
      "bodyEffects": "滋陰潤肺、養胃生津、補腎益精",
      "emotionalContext": "乾涸枯竭、缺乏柔軟、需要潤澤滋養",
      "healingAffirmation": "我用溫柔的水分滋潤心靈，讓生命重獲柔軟與彈性",
      "image": "images/tonifying/白木耳.png"
    },
    {
      "name": "紅棗",
      "latinName": "Ziziphus jujuba",
      "category": "補益類",
      "properties": "甘、溫，歸脾、胃、心經",
      "bodyEffects": "補中益氣、養血安神、緩和藥性",
      "emotionalContext": "心神不寧、能量不足、需要溫柔滋養",
      "healingAffirmation": "我用溫柔滋養自己的身心，讓甜美的能量充滿每一天",
      "image": "images/tonifying/紅棗.png"
    },
    {
      "name": "黃耆",
      "latinName": "Astragalus membranaceus",
      "category": "補益類",
      "properties": "甘、微溫，歸脾、肺經",
      "bodyEffects": "補氣升陽、固表止汗、托毒生肌",
      "emotionalContext": "精力渙散、界限模糊、需要強健防護",
      "healingAffirmation": "我建立穩固的能量邊界，讓內在力量充沛而堅定",
      "image": "images/tonifying/黃耆.png"
    },
    {
      "name": "黑芝麻",
      "latinName": "Sesamum indicum",
      "category": "補益類",
      "properties": "甘、平，歸肝、腎、大腸經",
      "bodyEffects": "補肝腎、益精血、潤腸燥",
      "emotionalContext": "根基不穩、早衰疲憊、需要深層滋養",
      "healingAffirmation": "我從根源深處滋養自己，讓生命力綿延不絕",
      "image": "images/tonifying/黑芝麻.png"
    }
  ],
  "疏散類": [
    {
      "name": "玫瑰花",
      "latinName": "Rosa rugosa",
      "category": "疏散類",
      "properties": "甘、微苦、溫、疏肝解鬱",
      "bodyEffects": "疏肝解鬱、行氣活血、調經止痛",
      "emotionalContext": "情感壓抑、心結難解、愛無法表達",
      "healingAffirmation": "我溫柔地打開心門，讓愛自由流動與表達",
      "image": "images/dispersing/玫瑰.png"
    },
    {
      "name": "柴胡",
      "latinName": "Bupleurum chinense",
      "category": "疏散類",
      "properties": "辛、微苦、微寒、疏肝解鬱",
      "bodyEffects": "疏肝解鬱、升舉陽氣、和解少陽",
      "emotionalContext": "情緒鬱結、心情低落、胸悶脅痛",
      "healingAffirmation": "我允許情緒自由流動，讓鬱結的能量疏散開來",
      "image": "images/dispersing/柴胡.png"
    },
    {
      "name": "桔梗",
      "latinName": "Platycodon grandiflorus",
      "category": "疏散類",
      "properties": "苦、辛、平、宣肺祛痰",
      "bodyEffects": "宣肺祛痰、利咽開音、排膿消腫",
      "emotionalContext": "表達受阻、聲音被壓抑、無法說出",
      "healingAffirmation": "我的聲音值得被聽見，真實的表達自由流暢",
      "image": "images/dispersing/桔梗.png"
    },
    {
      "name": "紫蘇",
      "latinName": "Perilla frutescens",
      "category": "疏散類",
      "properties": "辛、溫、發散風寒",
      "bodyEffects": "發散風寒、行氣寬中、解魚蟹毒",
      "emotionalContext": "情緒壓抑、胸悶不適、需要釋放",
      "healingAffirmation": "我允許自己溫柔地釋放，讓內在的空間變得寬闊",
      "image": "images/dispersing/紫蘇.png"
    },
    {
      "name": "薄荷",
      "latinName": "Mentha haplocalyx",
      "category": "疏散類",
      "properties": "辛、涼、疏風散熱",
      "bodyEffects": "疏散風熱、清利頭目、利咽透疹",
      "emotionalContext": "思緒混亂、頭腦昏沉、需要清醒",
      "healingAffirmation": "清新的能量流過我的心靈，帶來清明與覺察",
      "image": "images/dispersing/薄荷.png"
    },
    {
      "name": "防風",
      "latinName": "Saposhnikovia divaricata",
      "category": "疏散類",
      "properties": "辛、甘、微溫、祛風解表",
      "bodyEffects": "祛風解表、勝濕止痛、止痙定驚",
      "emotionalContext": "過度僵化、無法適應、抗拒變化",
      "healingAffirmation": "我在變化中保持彈性，溫柔地應對生命的風浪",
      "image": "images/dispersing/防風.png"
    },
    {
      "name": "陳皮",
      "latinName": "Citrus reticulata",
      "category": "疏散類",
      "properties": "辛、苦、溫、理氣健脾",
      "bodyEffects": "理氣健脾、燥濕化痰、調中開胃",
      "emotionalContext": "思維停滯、消化不良、無法轉化",
      "healingAffirmation": "我轉化經驗為智慧，讓生命的滋養流動循環",
      "image": "images/dispersing/陳皮.png"
    }
  ]
};

// 意圖對應的解讀整合訊息
const integrationMessages = {
    emotional: {
        title: "情緒釋放",
        getReading: (herb) => `
            <p>親愛的，你抽到了<strong>${herb.name}</strong>，這是宇宙給你的情緒療癒指引。</p>
            <p>此刻的你可能正在經歷「${herb.emotionalContext}」的狀態。${herb.name}的能量正在告訴你：<em>${herb.healingAffirmation}</em></p>
            <p>在接下來的日子裡，試著觀察自己的情緒流動，不需要壓抑也不需要過度表達。讓${herb.name}的療癒能量溫柔地陪伴你，引導你找回內在的平靜與力量。</p>
            <p><strong>💫 建議練習：</strong>每天花5分鐘靜坐，想像${herb.name}的能量如同溫暖的光芒，環繞並療癒你的情緒。</p>
        `
    },
    physical: {
        title: "身體療癒",
        getReading: (herb) => `
            <p>你的身體正在向你傳遞訊息，而<strong>${herb.name}</strong>出現在此刻絕非偶然。</p>
            <p>${herb.name}在中醫中具有「${herb.bodyEffects}」的作用，藥性為「${herb.properties}」。</p>
            <p>這張牌提醒你關注身心的連結。當你經歷「${herb.emotionalContext}」時，身體也會有相應的反應。</p>
            <p><em>${herb.healingAffirmation}</em></p>
            <p><strong>🌿 溫馨提醒：</strong>這是心靈指引而非醫療建議。如有身體不適，請諮詢專業中醫師，讓古老的智慧與現代醫學相輔相成。</p>
        `
    },
    spiritual: {
        title: "靈性成長",
        getReading: (herb) => `
            <p><strong>${herb.name}</strong>作為你的靈性嚮導出現了。</p>
            <p>在${herb.category.replace('類', '')}的能量中，${herb.name}代表著一種深層的生命智慧。它邀請你探索：當你感到「${herb.emotionalContext}」時，其實是靈魂在呼喚你進行更深層的自我覺察。</p>
            <p>${herb.name}傳遞的靈性訊息是：<em>${herb.healingAffirmation}</em></p>
            <p>這不僅是關於解決問題，更是關於理解生命的更大意義。讓這份智慧成為你靈性旅程上的明燈。</p>
            <p><strong>✨ 冥想引導：</strong>閉上眼睛，想像自己置身於${herb.name}生長的自然環境中，感受它的生命力與你的靈魂產生共振。</p>
        `
    }
};

// 獲取所有卡片的扁平陣列
function getAllCards() {
    const allCards = [];
    Object.values(cardsData).forEach(category => {
        allCards.push(...category);
    });
    return allCards;
}

// 隨機抽取一張卡片
function drawRandomCard() {
    const allCards = getAllCards();
    const randomIndex = Math.floor(Math.random() * allCards.length);
    return allCards[randomIndex];
}

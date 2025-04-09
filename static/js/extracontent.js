function getExtraContent(marqueeNumber) {
    let content;
    let audio;
    let src;
    switch (marqueeNumber) {
        case 0:
            content = document.createElement('span');
            content.textContent = `The website is over, what are you doing?`;
            return content;
        case 1:
            content = document.createElement('span');
            content.textContent = `Click me! WIN_RACE.ogg`;
            content.onclick = function() {document.getElementById('WIN_RACE.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'WIN_RACE.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/WIN_RACE.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 2:
            content = document.createElement('span');
            content.textContent = `Click me! BAD_RATS_WOOSH.ogg`;
            content.onclick = function() {document.getElementById('BAD_RATS_WOOSH.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'BAD_RATS_WOOSH.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/BAD_RATS_WOOSH.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 3:
            content = document.createElement('span');
            content.textContent = `Click me! BOSS_BEATEN_JINGLE.ogg`;
            content.onclick = function() {document.getElementById('BOSS_BEATEN_JINGLE.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'BOSS_BEATEN_JINGLE.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/BOSS_BEATEN_JINGLE.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 4:
            content = document.createElement('span');
            content.textContent = `Click me! BOSS_BEATEN_JINGLE_old.ogg`;
            content.onclick = function() {document.getElementById('BOSS_BEATEN_JINGLE_old.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'BOSS_BEATEN_JINGLE_old.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/BOSS_BEATEN_JINGLE_old.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 5:
            content = document.createElement('span');
            content.textContent = `Click me! BrickSniff1.ogg`;
            content.onclick = function() {document.getElementById('BrickSniff1.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'BrickSniff1.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/BrickSniff1.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 6:
            content = document.createElement('span');
            content.textContent = `Click me! BrickSniff2.ogg`;
            content.onclick = function() {document.getElementById('BrickSniff2.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'BrickSniff2.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/BrickSniff2.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 7:
            content = document.createElement('span');
            content.textContent = `Click me! BrickSniff3.ogg`;
            content.onclick = function() {document.getElementById('BrickSniff3.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'BrickSniff3.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/BrickSniff3.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 8:
            content = document.createElement('span');
            content.textContent = `Click me! BrickYodeling.ogg`;
            content.onclick = function() {document.getElementById('BrickYodeling.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'BrickYodeling.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/BrickYodeling.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 9:
            content = document.createElement('span');
            content.textContent = `Click me! Bubblestation.ogg`;
            content.onclick = function() {document.getElementById('Bubblestation.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'Bubblestation.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/Bubblestation.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 10:
            content = document.createElement('span');
            content.textContent = `Click me! CANNON_GOBLINS_FIRE.ogg`;
            content.onclick = function() {document.getElementById('CANNON_GOBLINS_FIRE.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'CANNON_GOBLINS_FIRE.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/CANNON_GOBLINS_FIRE.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 11:
            content = document.createElement('span');
            content.textContent = `Click me! CARD_COLLECT.ogg`;
            content.onclick = function() {document.getElementById('CARD_COLLECT.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'CARD_COLLECT.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/CARD_COLLECT.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 12:
            content = document.createElement('span');
            content.textContent = `Click me! CITY_PIG_GRAB.ogg`;
            content.onclick = function() {document.getElementById('CITY_PIG_GRAB.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'CITY_PIG_GRAB.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/CITY_PIG_GRAB.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 13:
            content = document.createElement('span');
            content.textContent = `Click me! CITY_RAT_BALOON_DEFLATE.ogg`;
            content.onclick = function() {document.getElementById('CITY_RAT_BALOON_DEFLATE.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'CITY_RAT_BALOON_DEFLATE.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/CITY_RAT_BALOON_DEFLATE.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 14:
            content = document.createElement('span');
            content.textContent = `Click me! Checkpoint.ogg`;
            content.onclick = function() {document.getElementById('Checkpoint.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'Checkpoint.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/Checkpoint.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 15:
            content = document.createElement('span');
            content.textContent = `Click me! Cheers.ogg`;
            content.onclick = function() {document.getElementById('Cheers.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'Cheers.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/Cheers.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 16:
            content = document.createElement('span');
            content.textContent = `Click me! Cow.ogg`;
            content.onclick = function() {document.getElementById('Cow.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'Cow.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/Cow.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 17:
            content = document.createElement('span');
            content.textContent = `Click me! Detransfo.ogg`;
            content.onclick = function() {document.getElementById('Detransfo.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'Detransfo.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/Detransfo.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 18:
            content = document.createElement('span');
            content.textContent = `Click me! EnemyCharge.ogg`;
            content.onclick = function() {document.getElementById('EnemyCharge.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'EnemyCharge.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/EnemyCharge.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 19:
            content = document.createElement('span');
            content.textContent = `Click me! FileSelect1.ogg`;
            content.onclick = function() {document.getElementById('FileSelect1.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'FileSelect1.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/FileSelect1.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 20:
            content = document.createElement('span');
            content.textContent = `Click me! FileSelect2.ogg`;
            content.onclick = function() {document.getElementById('FileSelect2.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'FileSelect2.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/FileSelect2.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 21:
            content = document.createElement('span');
            content.textContent = `Click me! FileSelect3.ogg`;
            content.onclick = function() {document.getElementById('FileSelect3.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'FileSelect3.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/FileSelect3.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 22:
            content = document.createElement('span');
            content.textContent = `Click me! Fireass.ogg`;
            content.onclick = function() {document.getElementById('Fireass.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'Fireass.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/Fireass.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 23:
            content = document.createElement('span');
            content.textContent = `Click me! GET_BOSS_KEY.ogg`;
            content.onclick = function() {document.getElementById('GET_BOSS_KEY.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'GET_BOSS_KEY.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/GET_BOSS_KEY.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 24:
            content = document.createElement('span');
            content.textContent = `Click me! GHOST_SPEED_0.ogg`;
            content.onclick = function() {document.getElementById('GHOST_SPEED_0.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'GHOST_SPEED_0.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/GHOST_SPEED_0.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 25:
            content = document.createElement('span');
            content.textContent = `Click me! GHOST_SPEED_1.ogg`;
            content.onclick = function() {document.getElementById('GHOST_SPEED_1.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'GHOST_SPEED_1.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/GHOST_SPEED_1.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 26:
            content = document.createElement('span');
            content.textContent = `Click me! GHOST_SPEED_2.ogg`;
            content.onclick = function() {document.getElementById('GHOST_SPEED_2.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'GHOST_SPEED_2.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/GHOST_SPEED_2.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 27:
            content = document.createElement('span');
            content.textContent = `Click me! GeromeGot.ogg`;
            content.onclick = function() {document.getElementById('GeromeGot.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'GeromeGot.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/GeromeGot.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 28:
            content = document.createElement('span');
            content.textContent = `Click me! GhostPepIntro.ogg`;
            content.onclick = function() {document.getElementById('GhostPepIntro.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'GhostPepIntro.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/GhostPepIntro.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 29:
            content = document.createElement('span');
            content.textContent = `Click me! JINGLE_0.ogg`;
            content.onclick = function() {document.getElementById('JINGLE_0.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'JINGLE_0.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/JINGLE_0.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 30:
            content = document.createElement('span');
            content.textContent = `Click me! JINGLE_1.ogg`;
            content.onclick = function() {document.getElementById('JINGLE_1.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'JINGLE_1.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/JINGLE_1.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 31:
            content = document.createElement('span');
            content.textContent = `Click me! JINGLE_2.ogg`;
            content.onclick = function() {document.getElementById('JINGLE_2.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'JINGLE_2.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/JINGLE_2.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 32:
            content = document.createElement('span');
            content.textContent = `Click me! JINGLE_3.ogg`;
            content.onclick = function() {document.getElementById('JINGLE_3.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'JINGLE_3.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/JINGLE_3.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 33:
            content = document.createElement('span');
            content.textContent = `Click me! JOHN_PILLAR_IMPACT.ogg`;
            content.onclick = function() {document.getElementById('JOHN_PILLAR_IMPACT.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'JOHN_PILLAR_IMPACT.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/JOHN_PILLAR_IMPACT.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 34:
            content = document.createElement('span');
            content.textContent = `Click me! Kashing.ogg`;
            content.onclick = function() {document.getElementById('Kashing.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'Kashing.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/Kashing.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 35:
            content = document.createElement('span');
            content.textContent = `Click me! LOSE_RACE.ogg`;
            content.onclick = function() {document.getElementById('LOSE_RACE.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'LOSE_RACE.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/LOSE_RACE.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 36:
            content = document.createElement('span');
            content.textContent = `Click me! Lap2.ogg`;
            content.onclick = function() {document.getElementById('Lap2.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'Lap2.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/Lap2.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 37:
            content = document.createElement('span');
            content.textContent = `Click me! MenuBack.ogg`;
            content.onclick = function() {document.getElementById('MenuBack.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'MenuBack.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/MenuBack.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 38:
            content = document.createElement('span');
            content.textContent = `Click me! MenuLightswitch.ogg`;
            content.onclick = function() {document.getElementById('MenuLightswitch.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'MenuLightswitch.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/MenuLightswitch.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 39:
            content = document.createElement('span');
            content.textContent = `Click me! MenuMove.ogg`;
            content.onclick = function() {document.getElementById('MenuMove.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'MenuMove.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/MenuMove.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 40:
            content = document.createElement('span');
            content.textContent = `Click me! MenuSelect1.ogg`;
            content.onclick = function() {document.getElementById('MenuSelect1.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'MenuSelect1.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/MenuSelect1.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 41:
            content = document.createElement('span');
            content.textContent = `Click me! MenuSelect2.ogg`;
            content.onclick = function() {document.getElementById('MenuSelect2.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'MenuSelect2.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/MenuSelect2.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 42:
            content = document.createElement('span');
            content.textContent = `Click me! MenuSelect3.ogg`;
            content.onclick = function() {document.getElementById('MenuSelect3.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'MenuSelect3.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/MenuSelect3.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 43:
            content = document.createElement('span');
            content.textContent = `Click me! MortCube.ogg`;
            content.onclick = function() {document.getElementById('MortCube.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'MortCube.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/MortCube.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 44:
            content = document.createElement('span');
            content.textContent = `Click me! MortDead.ogg`;
            content.onclick = function() {document.getElementById('MortDead.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'MortDead.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/MortDead.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 45:
            content = document.createElement('span');
            content.textContent = `Click me! MortPickup1.ogg`;
            content.onclick = function() {document.getElementById('MortPickup1.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'MortPickup1.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/MortPickup1.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 46:
            content = document.createElement('span');
            content.textContent = `Click me! MrStick1.ogg`;
            content.onclick = function() {document.getElementById('MrStick1.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'MrStick1.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/MrStick1.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 47:
            content = document.createElement('span');
            content.textContent = `Click me! MrStick2.ogg`;
            content.onclick = function() {document.getElementById('MrStick2.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'MrStick2.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/MrStick2.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 48:
            content = document.createElement('span');
            content.textContent = `Click me! MrStick3.ogg`;
            content.onclick = function() {document.getElementById('MrStick3.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'MrStick3.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/MrStick3.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 49:
            content = document.createElement('span');
            content.textContent = `Click me! MrStick4.ogg`;
            content.onclick = function() {document.getElementById('MrStick4.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'MrStick4.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/MrStick4.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 50:
            content = document.createElement('span');
            content.textContent = `Click me! MrStick5.ogg`;
            content.onclick = function() {document.getElementById('MrStick5.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'MrStick5.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/MrStick5.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 51:
            content = document.createElement('span');
            content.textContent = `Click me! Noise1.ogg`;
            content.onclick = function() {document.getElementById('Noise1.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'Noise1.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/Noise1.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 52:
            content = document.createElement('span');
            content.textContent = `Click me! Noise2.ogg`;
            content.onclick = function() {document.getElementById('Noise2.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'Noise2.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/Noise2.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 53:
            content = document.createElement('span');
            content.textContent = `Click me! Noise3.ogg`;
            content.onclick = function() {document.getElementById('Noise3.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'Noise3.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/Noise3.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 54:
            content = document.createElement('span');
            content.textContent = `Click me! Noise4.ogg`;
            content.onclick = function() {document.getElementById('Noise4.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'Noise4.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/Noise4.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 55:
            content = document.createElement('span');
            content.textContent = `Click me! Noise5.ogg`;
            content.onclick = function() {document.getElementById('Noise5.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'Noise5.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/Noise5.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 56:
            content = document.createElement('span');
            content.textContent = `Click me! Noise6.ogg`;
            content.onclick = function() {document.getElementById('Noise6.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'Noise6.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/Noise6.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 57:
            content = document.createElement('span');
            content.textContent = `Click me! NoiseCrazy_1.ogg`;
            content.onclick = function() {document.getElementById('NoiseCrazy_1.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'NoiseCrazy_1.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/NoiseCrazy_1.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 58:
            content = document.createElement('span');
            content.textContent = `Click me! NoiseGoblinBow.ogg`;
            content.onclick = function() {document.getElementById('NoiseGoblinBow.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'NoiseGoblinBow.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/NoiseGoblinBow.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 59:
            content = document.createElement('span');
            content.textContent = `Click me! Noise_Intro_2.ogg`;
            content.onclick = function() {document.getElementById('Noise_Intro_2.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'Noise_Intro_2.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/Noise_Intro_2.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 60:
            content = document.createElement('span');
            content.textContent = `Click me! PEPPINO_GUSTAVO_SWITCHING_SONG.ogg`;
            content.onclick = function() {document.getElementById('PEPPINO_GUSTAVO_SWITCHING_SONG.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'PEPPINO_GUSTAVO_SWITCHING_SONG.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/PEPPINO_GUSTAVO_SWITCHING_SONG.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 61:
            content = document.createElement('span');
            content.textContent = `Click me! PepGustavoCliff.ogg`;
            content.onclick = function() {document.getElementById('PepGustavoCliff.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'PepGustavoCliff.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/PepGustavoCliff.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 62:
            content = document.createElement('span');
            content.textContent = `Click me! PeppermanLaugh.ogg`;
            content.onclick = function() {document.getElementById('PeppermanLaugh.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'PeppermanLaugh.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/PeppermanLaugh.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 63:
            content = document.createElement('span');
            content.textContent = `Click me! PeppermanScared.ogg`;
            content.onclick = function() {document.getElementById('PeppermanScared.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'PeppermanScared.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/PeppermanScared.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 64:
            content = document.createElement('span');
            content.textContent = `Click me! PeppermanSnicker.ogg`;
            content.onclick = function() {document.getElementById('PeppermanSnicker.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'PeppermanSnicker.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/PeppermanSnicker.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 65:
            content = document.createElement('span');
            content.textContent = `Click me! PigOink1.ogg`;
            content.onclick = function() {document.getElementById('PigOink1.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'PigOink1.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/PigOink1.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 66:
            content = document.createElement('span');
            content.textContent = `Click me! PigOink2.ogg`;
            content.onclick = function() {document.getElementById('PigOink2.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'PigOink2.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/PigOink2.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 67:
            content = document.createElement('span');
            content.textContent = `Click me! PigOink3.ogg`;
            content.onclick = function() {document.getElementById('PigOink3.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'PigOink3.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/PigOink3.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 68:
            content = document.createElement('span');
            content.textContent = `Click me! PizzaGranny1.ogg`;
            content.onclick = function() {document.getElementById('PizzaGranny1.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'PizzaGranny1.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/PizzaGranny1.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 69:
            content = document.createElement('span');
            content.textContent = `Click me! PizzaGranny2.ogg`;
            content.onclick = function() {document.getElementById('PizzaGranny2.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'PizzaGranny2.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/PizzaGranny2.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 70:
            content = document.createElement('span');
            content.textContent = `Click me! PizzaGranny3.ogg`;
            content.onclick = function() {document.getElementById('PizzaGranny3.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'PizzaGranny3.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/PizzaGranny3.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 71:
            content = document.createElement('span');
            content.textContent = `Click me! PizzafaceLaugh2.ogg`;
            content.onclick = function() {document.getElementById('PizzafaceLaugh2.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'PizzafaceLaugh2.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/PizzafaceLaugh2.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 72:
            content = document.createElement('span');
            content.textContent = `Click me! PizzafaceMoving.ogg`;
            content.onclick = function() {document.getElementById('PizzafaceMoving.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'PizzafaceMoving.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/PizzafaceMoving.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 73:
            content = document.createElement('span');
            content.textContent = `Click me! Pizzahead1.ogg`;
            content.onclick = function() {document.getElementById('Pizzahead1.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'Pizzahead1.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/Pizzahead1.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 74:
            content = document.createElement('span');
            content.textContent = `Click me! Pizzahead3.ogg`;
            content.onclick = function() {document.getElementById('Pizzahead3.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'Pizzahead3.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/Pizzahead3.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 75:
            content = document.createElement('span');
            content.textContent = `Click me! PizzardElectricity.ogg`;
            content.onclick = function() {document.getElementById('PizzardElectricity.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'PizzardElectricity.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/PizzardElectricity.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 76:
            content = document.createElement('span');
            content.textContent = `Click me! RANCHER_PISTOL_START.ogg`;
            content.onclick = function() {document.getElementById('RANCHER_PISTOL_START.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'RANCHER_PISTOL_START.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/RANCHER_PISTOL_START.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 77:
            content = document.createElement('span');
            content.textContent = `Click me! RatDead.ogg`;
            content.onclick = function() {document.getElementById('RatDead.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'RatDead.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/RatDead.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 78:
            content = document.createElement('span');
            content.textContent = `Click me! RatSniff.ogg`;
            content.onclick = function() {document.getElementById('RatSniff.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'RatSniff.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/RatSniff.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 79:
            content = document.createElement('span');
            content.textContent = `Click me! SEWER_CUTOUT_NINJA_SLAP.ogg`;
            content.onclick = function() {document.getElementById('SEWER_CUTOUT_NINJA_SLAP.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'SEWER_CUTOUT_NINJA_SLAP.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/SEWER_CUTOUT_NINJA_SLAP.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 80:
            content = document.createElement('span');
            content.textContent = `Click me! SEWER_STEP_IN_SHIT.ogg`;
            content.onclick = function() {document.getElementById('SEWER_STEP_IN_SHIT.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'SEWER_STEP_IN_SHIT.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/SEWER_STEP_IN_SHIT.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 81:
            content = document.createElement('span');
            content.textContent = `Click me! Scream.ogg`;
            content.onclick = function() {document.getElementById('Scream.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'Scream.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/Scream.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 82:
            content = document.createElement('span');
            content.textContent = `Click me! Slideground.ogg`;
            content.onclick = function() {document.getElementById('Slideground.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'Slideground.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/Slideground.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 83:
            content = document.createElement('span');
            content.textContent = `Click me! TREASURE_FIND (1).ogg`;
            content.onclick = function() {document.getElementById('TREASURE_FIND (1).ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'TREASURE_FIND (1).ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/TREASURE_FIND (1).ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 84:
            content = document.createElement('span');
            content.textContent = `Click me! TREASURE_GUY_APPEAR.ogg`;
            content.onclick = function() {document.getElementById('TREASURE_GUY_APPEAR.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'TREASURE_GUY_APPEAR.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/TREASURE_GUY_APPEAR.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 85:
            content = document.createElement('span');
            content.textContent = `Click me! TRIBALDANCE.ogg`;
            content.onclick = function() {document.getElementById('TRIBALDANCE.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'TRIBALDANCE.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/TRIBALDANCE.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 86:
            content = document.createElement('span');
            content.textContent = `Click me! TVStatic.ogg`;
            content.onclick = function() {document.getElementById('TVStatic.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'TVStatic.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/TVStatic.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 87:
            content = document.createElement('span');
            content.textContent = `Click me! TVswitch.ogg`;
            content.onclick = function() {document.getElementById('TVswitch.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'TVswitch.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/TVswitch.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 88:
            content = document.createElement('span');
            content.textContent = `Click me! TVswitchback.ogg`;
            content.onclick = function() {document.getElementById('TVswitchback.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'TVswitchback.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/TVswitchback.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 89:
            content = document.createElement('span');
            content.textContent = `Click me! Transfo.ogg`;
            content.onclick = function() {document.getElementById('Transfo.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'Transfo.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/Transfo.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 90:
            content = document.createElement('span');
            content.textContent = `Click me! UFO.ogg`;
            content.onclick = function() {document.getElementById('UFO.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'UFO.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/UFO.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 91:
            content = document.createElement('span');
            content.textContent = `Click me! Voice-01.ogg`;
            content.onclick = function() {document.getElementById('Voice-01.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'Voice-01.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/Voice-01.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 92:
            content = document.createElement('span');
            content.textContent = `Click me! Voice-02.ogg`;
            content.onclick = function() {document.getElementById('Voice-02.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'Voice-02.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/Voice-02.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 93:
            content = document.createElement('span');
            content.textContent = `Click me! Voice-04.ogg`;
            content.onclick = function() {document.getElementById('Voice-04.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'Voice-04.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/Voice-04.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 94:
            content = document.createElement('span');
            content.textContent = `Click me! Voice-05.ogg`;
            content.onclick = function() {document.getElementById('Voice-05.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'Voice-05.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/Voice-05.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 95:
            content = document.createElement('span');
            content.textContent = `Click me! Voice-06.ogg`;
            content.onclick = function() {document.getElementById('Voice-06.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'Voice-06.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/Voice-06.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 96:
            content = document.createElement('span');
            content.textContent = `Click me! Voice-07.ogg`;
            content.onclick = function() {document.getElementById('Voice-07.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'Voice-07.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/Voice-07.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 97:
            content = document.createElement('span');
            content.textContent = `Click me! Voice-08.ogg`;
            content.onclick = function() {document.getElementById('Voice-08.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'Voice-08.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/Voice-08.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 98:
            content = document.createElement('span');
            content.textContent = `Click me! Voice-09.ogg`;
            content.onclick = function() {document.getElementById('Voice-09.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'Voice-09.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/Voice-09.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 99:
            content = document.createElement('span');
            content.textContent = `Click me! Voice-10.ogg`;
            content.onclick = function() {document.getElementById('Voice-10.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'Voice-10.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/Voice-10.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 100:
            content = document.createElement('span');
            content.textContent = `Click me! Voice-11.ogg`;
            content.onclick = function() {document.getElementById('Voice-11.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'Voice-11.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/Voice-11.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 101:
            content = document.createElement('span');
            content.textContent = `Click me! Voice-12.ogg`;
            content.onclick = function() {document.getElementById('Voice-12.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'Voice-12.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/Voice-12.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 102:
            content = document.createElement('span');
            content.textContent = `Click me! Voice-13.ogg`;
            content.onclick = function() {document.getElementById('Voice-13.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'Voice-13.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/Voice-13.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 103:
            content = document.createElement('span');
            content.textContent = `Click me! Voice-14.ogg`;
            content.onclick = function() {document.getElementById('Voice-14.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'Voice-14.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/Voice-14.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 104:
            content = document.createElement('span');
            content.textContent = `Click me! Voice-18.ogg`;
            content.onclick = function() {document.getElementById('Voice-18.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'Voice-18.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/Voice-18.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 105:
            content = document.createElement('span');
            content.textContent = `Click me! Voice-19.ogg`;
            content.onclick = function() {document.getElementById('Voice-19.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'Voice-19.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/Voice-19.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 106:
            content = document.createElement('span');
            content.textContent = `Click me! Voice-20.ogg`;
            content.onclick = function() {document.getElementById('Voice-20.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'Voice-20.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/Voice-20.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 107:
            content = document.createElement('span');
            content.textContent = `Click me! Voice-21.ogg`;
            content.onclick = function() {document.getElementById('Voice-21.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'Voice-21.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/Voice-21.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 108:
            content = document.createElement('span');
            content.textContent = `Click me! Voice-22.ogg`;
            content.onclick = function() {document.getElementById('Voice-22.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'Voice-22.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/Voice-22.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 109:
            content = document.createElement('span');
            content.textContent = `Click me! Voice-23.ogg`;
            content.onclick = function() {document.getElementById('Voice-23.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'Voice-23.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/Voice-23.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 110:
            content = document.createElement('span');
            content.textContent = `Click me! WEENIE_BOING.ogg`;
            content.onclick = function() {document.getElementById('WEENIE_BOING.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'WEENIE_BOING.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/WEENIE_BOING.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 111:
            content = document.createElement('span');
            content.textContent = `Click me! WarTimer.ogg`;
            content.onclick = function() {document.getElementById('WarTimer.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'WarTimer.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/WarTimer.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 112:
            content = document.createElement('span');
            content.textContent = `Click me! WarTimerUp.ogg`;
            content.onclick = function() {document.getElementById('WarTimerUp.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'WarTimerUp.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/WarTimerUp.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 113:
            content = document.createElement('span');
            content.textContent = `Click me! airspin.ogg`;
            content.onclick = function() {document.getElementById('airspin.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'airspin.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/airspin.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 114:
            content = document.createElement('span');
            content.textContent = `Click me! alarm.ogg`;
            content.onclick = function() {document.getElementById('alarm.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'alarm.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/alarm.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 115:
            content = document.createElement('span');
            content.textContent = `Click me! animatronic.ogg`;
            content.onclick = function() {document.getElementById('animatronic.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'animatronic.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/animatronic.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 116:
            content = document.createElement('span');
            content.textContent = `Click me! antigravbump1.ogg`;
            content.onclick = function() {document.getElementById('antigravbump1.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'antigravbump1.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/antigravbump1.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 117:
            content = document.createElement('span');
            content.textContent = `Click me! antigravbump2.ogg`;
            content.onclick = function() {document.getElementById('antigravbump2.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'antigravbump2.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/antigravbump2.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 118:
            content = document.createElement('span');
            content.textContent = `Click me! antigravbump3.ogg`;
            content.onclick = function() {document.getElementById('antigravbump3.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'antigravbump3.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/antigravbump3.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 119:
            content = document.createElement('span');
            content.textContent = `Click me! antigravend.ogg`;
            content.onclick = function() {document.getElementById('antigravend.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'antigravend.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/antigravend.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 120:
            content = document.createElement('span');
            content.textContent = `Click me! antigravstart.ogg`;
            content.onclick = function() {document.getElementById('antigravstart.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'antigravstart.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/antigravstart.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 121:
            content = document.createElement('span');
            content.textContent = `Click me! axethrow.ogg`;
            content.onclick = function() {document.getElementById('axethrow.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'axethrow.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/axethrow.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 122:
            content = document.createElement('span');
            content.textContent = `Click me! balloonflap.ogg`;
            content.onclick = function() {document.getElementById('balloonflap.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'balloonflap.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/balloonflap.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 123:
            content = document.createElement('span');
            content.textContent = `Click me! bananaslip.ogg`;
            content.onclick = function() {document.getElementById('bananaslip.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'bananaslip.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/bananaslip.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 124:
            content = document.createElement('span');
            content.textContent = `Click me! banditochicken.ogg`;
            content.onclick = function() {document.getElementById('banditochicken.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'banditochicken.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/banditochicken.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 125:
            content = document.createElement('span');
            content.textContent = `Click me! barrel.ogg`;
            content.onclick = function() {document.getElementById('barrel.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'barrel.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/barrel.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 126:
            content = document.createElement('span');
            content.textContent = `Click me! barrelbump1.ogg`;
            content.onclick = function() {document.getElementById('barrelbump1.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'barrelbump1.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/barrelbump1.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 127:
            content = document.createElement('span');
            content.textContent = `Click me! barrelbump2.ogg`;
            content.onclick = function() {document.getElementById('barrelbump2.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'barrelbump2.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/barrelbump2.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 128:
            content = document.createElement('span');
            content.textContent = `Click me! barrelbump3.ogg`;
            content.onclick = function() {document.getElementById('barrelbump3.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'barrelbump3.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/barrelbump3.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 129:
            content = document.createElement('span');
            content.textContent = `Click me! barrelbump4.ogg`;
            content.onclick = function() {document.getElementById('barrelbump4.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'barrelbump4.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/barrelbump4.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 130:
            content = document.createElement('span');
            content.textContent = `Click me! barrelbump5.ogg`;
            content.onclick = function() {document.getElementById('barrelbump5.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'barrelbump5.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/barrelbump5.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 131:
            content = document.createElement('span');
            content.textContent = `Click me! barrelbump6.ogg`;
            content.onclick = function() {document.getElementById('barrelbump6.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'barrelbump6.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/barrelbump6.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 132:
            content = document.createElement('span');
            content.textContent = `Click me! barrelbump7.ogg`;
            content.onclick = function() {document.getElementById('barrelbump7.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'barrelbump7.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/barrelbump7.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 133:
            content = document.createElement('span');
            content.textContent = `Click me! barrelslopejump.ogg`;
            content.onclick = function() {document.getElementById('barrelslopejump.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'barrelslopejump.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/barrelslopejump.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 134:
            content = document.createElement('span');
            content.textContent = `Click me! barrelstart.ogg`;
            content.onclick = function() {document.getElementById('barrelstart.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'barrelstart.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/barrelstart.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 135:
            content = document.createElement('span');
            content.textContent = `Click me! batwing.ogg`;
            content.onclick = function() {document.getElementById('batwing.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'batwing.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/batwing.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 136:
            content = document.createElement('span');
            content.textContent = `Click me! beerbreak.ogg`;
            content.onclick = function() {document.getElementById('beerbreak.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'beerbreak.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/beerbreak.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 137:
            content = document.createElement('span');
            content.textContent = `Click me! beerhit.ogg`;
            content.onclick = function() {document.getElementById('beerhit.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'beerhit.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/beerhit.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 138:
            content = document.createElement('span');
            content.textContent = `Click me! bellcollectbig.ogg`;
            content.onclick = function() {document.getElementById('bellcollectbig.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'bellcollectbig.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/bellcollectbig.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 139:
            content = document.createElement('span');
            content.textContent = `Click me! bellcollectsmall.ogg`;
            content.onclick = function() {document.getElementById('bellcollectsmall.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'bellcollectsmall.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/bellcollectsmall.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 140:
            content = document.createElement('span');
            content.textContent = `Click me! blackoutpunch.ogg`;
            content.onclick = function() {document.getElementById('blackoutpunch.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'blackoutpunch.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/blackoutpunch.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 141:
            content = document.createElement('span');
            content.textContent = `Click me! bombbounce.ogg`;
            content.onclick = function() {document.getElementById('bombbounce.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'bombbounce.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/bombbounce.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 142:
            content = document.createElement('span');
            content.textContent = `Click me! bombthrow.ogg`;
            content.onclick = function() {document.getElementById('bombthrow.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'bombthrow.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/bombthrow.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 143:
            content = document.createElement('span');
            content.textContent = `Click me! boss_introduction.ogg`;
            content.onclick = function() {document.getElementById('boss_introduction.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'boss_introduction.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/boss_introduction.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 144:
            content = document.createElement('span');
            content.textContent = `Click me! boss_introduction_old.ogg`;
            content.onclick = function() {document.getElementById('boss_introduction_old.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'boss_introduction_old.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/boss_introduction_old.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 145:
            content = document.createElement('span');
            content.textContent = `Click me! bossdeath.ogg`;
            content.onclick = function() {document.getElementById('bossdeath.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'bossdeath.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/bossdeath.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 146:
            content = document.createElement('span');
            content.textContent = `Click me! bossdefeattonk.ogg`;
            content.onclick = function() {document.getElementById('bossdefeattonk.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'bossdefeattonk.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/bossdefeattonk.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 147:
            content = document.createElement('span');
            content.textContent = `Click me! bossgaterise.ogg`;
            content.onclick = function() {document.getElementById('bossgaterise.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'bossgaterise.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/bossgaterise.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 148:
            content = document.createElement('span');
            content.textContent = `Click me! bossvulnerable.ogg`;
            content.onclick = function() {document.getElementById('bossvulnerable.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'bossvulnerable.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/bossvulnerable.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 149:
            content = document.createElement('span');
            content.textContent = `Click me! bottlepop.ogg`;
            content.onclick = function() {document.getElementById('bottlepop.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'bottlepop.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/bottlepop.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 150:
            content = document.createElement('span');
            content.textContent = `Click me! boxxedflap1.ogg`;
            content.onclick = function() {document.getElementById('boxxedflap1.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'boxxedflap1.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/boxxedflap1.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 151:
            content = document.createElement('span');
            content.textContent = `Click me! boxxedflap2.ogg`;
            content.onclick = function() {document.getElementById('boxxedflap2.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'boxxedflap2.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/boxxedflap2.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 152:
            content = document.createElement('span');
            content.textContent = `Click me! boxxedflap3.ogg`;
            content.onclick = function() {document.getElementById('boxxedflap3.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'boxxedflap3.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/boxxedflap3.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 153:
            content = document.createElement('span');
            content.textContent = `Click me! boxxedflap4.ogg`;
            content.onclick = function() {document.getElementById('boxxedflap4.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'boxxedflap4.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/boxxedflap4.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 154:
            content = document.createElement('span');
            content.textContent = `Click me! boxxedspin.ogg`;
            content.onclick = function() {document.getElementById('boxxedspin.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'boxxedspin.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/boxxedspin.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 155:
            content = document.createElement('span');
            content.textContent = `Click me! boxxedstep1.ogg`;
            content.onclick = function() {document.getElementById('boxxedstep1.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'boxxedstep1.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/boxxedstep1.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 156:
            content = document.createElement('span');
            content.textContent = `Click me! boxxedstep2.ogg`;
            content.onclick = function() {document.getElementById('boxxedstep2.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'boxxedstep2.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/boxxedstep2.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 157:
            content = document.createElement('span');
            content.textContent = `Click me! boxxedstep3.ogg`;
            content.onclick = function() {document.getElementById('boxxedstep3.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'boxxedstep3.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/boxxedstep3.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 158:
            content = document.createElement('span');
            content.textContent = `Click me! boxxedstep4.ogg`;
            content.onclick = function() {document.getElementById('boxxedstep4.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'boxxedstep4.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/boxxedstep4.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 159:
            content = document.createElement('span');
            content.textContent = `Click me! bucket.ogg`;
            content.onclick = function() {document.getElementById('bucket.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'bucket.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/bucket.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 160:
            content = document.createElement('span');
            content.textContent = `Click me! burp.ogg`;
            content.onclick = function() {document.getElementById('burp.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'burp.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/burp.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 161:
            content = document.createElement('span');
            content.textContent = `Click me! cannonball.ogg`;
            content.onclick = function() {document.getElementById('cannonball.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'cannonball.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/cannonball.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 162:
            content = document.createElement('span');
            content.textContent = `Click me! cannonballshoot1.ogg`;
            content.onclick = function() {document.getElementById('cannonballshoot1.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'cannonballshoot1.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/cannonballshoot1.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 163:
            content = document.createElement('span');
            content.textContent = `Click me! cannonballshoot2.ogg`;
            content.onclick = function() {document.getElementById('cannonballshoot2.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'cannonballshoot2.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/cannonballshoot2.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 164:
            content = document.createElement('span');
            content.textContent = `Click me! cannonballshoot3.ogg`;
            content.onclick = function() {document.getElementById('cannonballshoot3.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'cannonballshoot3.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/cannonballshoot3.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 165:
            content = document.createElement('span');
            content.textContent = `Click me! cannonballshoot4.ogg`;
            content.onclick = function() {document.getElementById('cannonballshoot4.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'cannonballshoot4.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/cannonballshoot4.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 166:
            content = document.createElement('span');
            content.textContent = `Click me! cheeseball.ogg`;
            content.onclick = function() {document.getElementById('cheeseball.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'cheeseball.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/cheeseball.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 167:
            content = document.createElement('span');
            content.textContent = `Click me! cheeseground1.ogg`;
            content.onclick = function() {document.getElementById('cheeseground1.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'cheeseground1.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/cheeseground1.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 168:
            content = document.createElement('span');
            content.textContent = `Click me! cheeseground2.ogg`;
            content.onclick = function() {document.getElementById('cheeseground2.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'cheeseground2.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/cheeseground2.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 169:
            content = document.createElement('span');
            content.textContent = `Click me! cheeseground3.ogg`;
            content.onclick = function() {document.getElementById('cheeseground3.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'cheeseground3.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/cheeseground3.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 170:
            content = document.createElement('span');
            content.textContent = `Click me! cheeseground4.ogg`;
            content.onclick = function() {document.getElementById('cheeseground4.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'cheeseground4.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/cheeseground4.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 171:
            content = document.createElement('span');
            content.textContent = `Click me! cheesejump1.ogg`;
            content.onclick = function() {document.getElementById('cheesejump1.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'cheesejump1.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/cheesejump1.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 172:
            content = document.createElement('span');
            content.textContent = `Click me! cheesejump2.ogg`;
            content.onclick = function() {document.getElementById('cheesejump2.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'cheesejump2.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/cheesejump2.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 173:
            content = document.createElement('span');
            content.textContent = `Click me! cheesejump3.ogg`;
            content.onclick = function() {document.getElementById('cheesejump3.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'cheesejump3.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/cheesejump3.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 174:
            content = document.createElement('span');
            content.textContent = `Click me! cheesejump4.ogg`;
            content.onclick = function() {document.getElementById('cheesejump4.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'cheesejump4.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/cheesejump4.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 175:
            content = document.createElement('span');
            content.textContent = `Click me! cheesestep1.ogg`;
            content.onclick = function() {document.getElementById('cheesestep1.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'cheesestep1.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/cheesestep1.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 176:
            content = document.createElement('span');
            content.textContent = `Click me! cheesestep2.ogg`;
            content.onclick = function() {document.getElementById('cheesestep2.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'cheesestep2.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/cheesestep2.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 177:
            content = document.createElement('span');
            content.textContent = `Click me! cheesestep3.ogg`;
            content.onclick = function() {document.getElementById('cheesestep3.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'cheesestep3.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/cheesestep3.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 178:
            content = document.createElement('span');
            content.textContent = `Click me! cheesestep4.ogg`;
            content.onclick = function() {document.getElementById('cheesestep4.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'cheesestep4.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/cheesestep4.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 179:
            content = document.createElement('span');
            content.textContent = `Click me! comboup1.ogg`;
            content.onclick = function() {document.getElementById('comboup1.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'comboup1.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/comboup1.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 180:
            content = document.createElement('span');
            content.textContent = `Click me! comboup2.ogg`;
            content.onclick = function() {document.getElementById('comboup2.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'comboup2.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/comboup2.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 181:
            content = document.createElement('span');
            content.textContent = `Click me! comboup4.ogg`;
            content.onclick = function() {document.getElementById('comboup4.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'comboup4.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/comboup4.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 182:
            content = document.createElement('span');
            content.textContent = `Click me! comingoutground.ogg`;
            content.onclick = function() {document.getElementById('comingoutground.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'comingoutground.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/comingoutground.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 183:
            content = document.createElement('span');
            content.textContent = `Click me! computerswitch.ogg`;
            content.onclick = function() {document.getElementById('computerswitch.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'computerswitch.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/computerswitch.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 184:
            content = document.createElement('span');
            content.textContent = `Click me! computertouch.ogg`;
            content.onclick = function() {document.getElementById('computertouch.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'computertouch.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/computertouch.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 185:
            content = document.createElement('span');
            content.textContent = `Click me! coughing.ogg`;
            content.onclick = function() {document.getElementById('coughing.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'coughing.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/coughing.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 186:
            content = document.createElement('span');
            content.textContent = `Click me! cross.ogg`;
            content.onclick = function() {document.getElementById('cross.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'cross.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/cross.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 187:
            content = document.createElement('span');
            content.textContent = `Click me! crossloop.ogg`;
            content.onclick = function() {document.getElementById('crossloop.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'crossloop.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/crossloop.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 188:
            content = document.createElement('span');
            content.textContent = `Click me! dashpad.ogg`;
            content.onclick = function() {document.getElementById('dashpad.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'dashpad.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/dashpad.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 189:
            content = document.createElement('span');
            content.textContent = `Click me! demonsuprise.ogg`;
            content.onclick = function() {document.getElementById('demonsuprise.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'demonsuprise.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/demonsuprise.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 190:
            content = document.createElement('span');
            content.textContent = `Click me! dive.ogg`;
            content.onclick = function() {document.getElementById('dive.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'dive.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/dive.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 191:
            content = document.createElement('span');
            content.textContent = `Click me! doiserock.ogg`;
            content.onclick = function() {document.getElementById('doiserock.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'doiserock.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/doiserock.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 192:
            content = document.createElement('span');
            content.textContent = `Click me! doublejump.ogg`;
            content.onclick = function() {document.getElementById('doublejump.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'doublejump.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/doublejump.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 193:
            content = document.createElement('span');
            content.textContent = `Click me! doublejump2.ogg`;
            content.onclick = function() {document.getElementById('doublejump2.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'doublejump2.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/doublejump2.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 194:
            content = document.createElement('span');
            content.textContent = `Click me! duel.ogg`;
            content.onclick = function() {document.getElementById('duel.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'duel.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/duel.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 195:
            content = document.createElement('span');
            content.textContent = `Click me! duel_old.ogg`;
            content.onclick = function() {document.getElementById('duel_old.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'duel_old.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/duel_old.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 196:
            content = document.createElement('span');
            content.textContent = `Click me! elevatording.ogg`;
            content.onclick = function() {document.getElementById('elevatording.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'elevatording.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/elevatording.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 197:
            content = document.createElement('span');
            content.textContent = `Click me! elevatorsqueak.ogg`;
            content.onclick = function() {document.getElementById('elevatorsqueak.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'elevatorsqueak.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/elevatorsqueak.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 198:
            content = document.createElement('span');
            content.textContent = `Click me! elevatorsqueak2.ogg`;
            content.onclick = function() {document.getElementById('elevatorsqueak2.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'elevatorsqueak2.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/elevatorsqueak2.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 199:
            content = document.createElement('span');
            content.textContent = `Click me! enemyrarescream.ogg`;
            content.onclick = function() {document.getElementById('enemyrarescream.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'enemyrarescream.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/enemyrarescream.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 200:
            content = document.createElement('span');
            content.textContent = `Click me! enemyrarescream2.ogg`;
            content.onclick = function() {document.getElementById('enemyrarescream2.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'enemyrarescream2.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/enemyrarescream2.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 201:
            content = document.createElement('span');
            content.textContent = `Click me! fakepepbodyslam.ogg`;
            content.onclick = function() {document.getElementById('fakepepbodyslam.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'fakepepbodyslam.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/fakepepbodyslam.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 202:
            content = document.createElement('span');
            content.textContent = `Click me! fakepepchase.ogg`;
            content.onclick = function() {document.getElementById('fakepepchase.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'fakepepchase.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/fakepepchase.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 203:
            content = document.createElement('span');
            content.textContent = `Click me! fakepepdeform.ogg`;
            content.onclick = function() {document.getElementById('fakepepdeform.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'fakepepdeform.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/fakepepdeform.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 204:
            content = document.createElement('span');
            content.textContent = `Click me! fakepepflailing.ogg`;
            content.onclick = function() {document.getElementById('fakepepflailing.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'fakepepflailing.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/fakepepflailing.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 205:
            content = document.createElement('span');
            content.textContent = `Click me! fakepepgrab.ogg`;
            content.onclick = function() {document.getElementById('fakepepgrab.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'fakepepgrab.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/fakepepgrab.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 206:
            content = document.createElement('span');
            content.textContent = `Click me! fakepepheadoff.ogg`;
            content.onclick = function() {document.getElementById('fakepepheadoff.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'fakepepheadoff.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/fakepepheadoff.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 207:
            content = document.createElement('span');
            content.textContent = `Click me! fakepepheadthrow.ogg`;
            content.onclick = function() {document.getElementById('fakepepheadthrow.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'fakepepheadthrow.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/fakepepheadthrow.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 208:
            content = document.createElement('span');
            content.textContent = `Click me! fakepepmach.ogg`;
            content.onclick = function() {document.getElementById('fakepepmach.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'fakepepmach.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/fakepepmach.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 209:
            content = document.createElement('span');
            content.textContent = `Click me! fakepepnegative1.ogg`;
            content.onclick = function() {document.getElementById('fakepepnegative1.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'fakepepnegative1.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/fakepepnegative1.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 210:
            content = document.createElement('span');
            content.textContent = `Click me! fakepepnegative2.ogg`;
            content.onclick = function() {document.getElementById('fakepepnegative2.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'fakepepnegative2.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/fakepepnegative2.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 211:
            content = document.createElement('span');
            content.textContent = `Click me! fakepeppositive1.ogg`;
            content.onclick = function() {document.getElementById('fakepeppositive1.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'fakepeppositive1.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/fakepeppositive1.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 212:
            content = document.createElement('span');
            content.textContent = `Click me! fakepeppositive2.ogg`;
            content.onclick = function() {document.getElementById('fakepeppositive2.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'fakepeppositive2.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/fakepeppositive2.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 213:
            content = document.createElement('span');
            content.textContent = `Click me! fakepeppositive3.ogg`;
            content.onclick = function() {document.getElementById('fakepeppositive3.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'fakepeppositive3.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/fakepeppositive3.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 214:
            content = document.createElement('span');
            content.textContent = `Click me! fakepepreform.ogg`;
            content.onclick = function() {document.getElementById('fakepepreform.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'fakepepreform.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/fakepepreform.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 215:
            content = document.createElement('span');
            content.textContent = `Click me! fakepepscream.ogg`;
            content.onclick = function() {document.getElementById('fakepepscream.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'fakepepscream.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/fakepepscream.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 216:
            content = document.createElement('span');
            content.textContent = `Click me! fakepepstep.ogg`;
            content.onclick = function() {document.getElementById('fakepepstep.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'fakepepstep.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/fakepepstep.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 217:
            content = document.createElement('span');
            content.textContent = `Click me! fakepepsuperjump1.ogg`;
            content.onclick = function() {document.getElementById('fakepepsuperjump1.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'fakepepsuperjump1.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/fakepepsuperjump1.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 218:
            content = document.createElement('span');
            content.textContent = `Click me! fakepepsuperjump2.ogg`;
            content.onclick = function() {document.getElementById('fakepepsuperjump2.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'fakepepsuperjump2.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/fakepepsuperjump2.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 219:
            content = document.createElement('span');
            content.textContent = `Click me! fakepeptaunt.ogg`;
            content.onclick = function() {document.getElementById('fakepeptaunt.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'fakepeptaunt.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/fakepeptaunt.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 220:
            content = document.createElement('span');
            content.textContent = `Click me! finale2.ogg`;
            content.onclick = function() {document.getElementById('finale2.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'finale2.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/finale2.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 221:
            content = document.createElement('span');
            content.textContent = `Click me! finaleexplosion.ogg`;
            content.onclick = function() {document.getElementById('finaleexplosion.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'finaleexplosion.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/finaleexplosion.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 222:
            content = document.createElement('span');
            content.textContent = `Click me! finaljudgement1.ogg`;
            content.onclick = function() {document.getElementById('finaljudgement1.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'finaljudgement1.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/finaljudgement1.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 223:
            content = document.createElement('span');
            content.textContent = `Click me! finaljudgement2.ogg`;
            content.onclick = function() {document.getElementById('finaljudgement2.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'finaljudgement2.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/finaljudgement2.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 224:
            content = document.createElement('span');
            content.textContent = `Click me! finaljudgementbad.ogg`;
            content.onclick = function() {document.getElementById('finaljudgementbad.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'finaljudgementbad.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/finaljudgementbad.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 225:
            content = document.createElement('span');
            content.textContent = `Click me! finaljudgementgood.ogg`;
            content.onclick = function() {document.getElementById('finaljudgementgood.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'finaljudgementgood.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/finaljudgementgood.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 226:
            content = document.createElement('span');
            content.textContent = `Click me! firemouth.ogg`;
            content.onclick = function() {document.getElementById('firemouth.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'firemouth.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/firemouth.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 227:
            content = document.createElement('span');
            content.textContent = `Click me! firesound.ogg`;
            content.onclick = function() {document.getElementById('firesound.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'firesound.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/firesound.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 228:
            content = document.createElement('span');
            content.textContent = `Click me! flies.ogg`;
            content.onclick = function() {document.getElementById('flies.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'flies.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/flies.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 229:
            content = document.createElement('span');
            content.textContent = `Click me! frog.ogg`;
            content.onclick = function() {document.getElementById('frog.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'frog.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/frog.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 230:
            content = document.createElement('span');
            content.textContent = `Click me! fuse.ogg`;
            content.onclick = function() {document.getElementById('fuse.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'fuse.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/fuse.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 231:
            content = document.createElement('span');
            content.textContent = `Click me! galloping.ogg`;
            content.onclick = function() {document.getElementById('galloping.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'galloping.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/galloping.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 232:
            content = document.createElement('span');
            content.textContent = `Click me! ghostambient.ogg`;
            content.onclick = function() {document.getElementById('ghostambient.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'ghostambient.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/ghostambient.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 233:
            content = document.createElement('span');
            content.textContent = `Click me! ghostdash1.ogg`;
            content.onclick = function() {document.getElementById('ghostdash1.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'ghostdash1.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/ghostdash1.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 234:
            content = document.createElement('span');
            content.textContent = `Click me! ghostdash2.ogg`;
            content.onclick = function() {document.getElementById('ghostdash2.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'ghostdash2.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/ghostdash2.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 235:
            content = document.createElement('span');
            content.textContent = `Click me! ghostdash3.ogg`;
            content.onclick = function() {document.getElementById('ghostdash3.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'ghostdash3.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/ghostdash3.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 236:
            content = document.createElement('span');
            content.textContent = `Click me! golfbump1.ogg`;
            content.onclick = function() {document.getElementById('golfbump1.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'golfbump1.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/golfbump1.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 237:
            content = document.createElement('span');
            content.textContent = `Click me! golfbump2.ogg`;
            content.onclick = function() {document.getElementById('golfbump2.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'golfbump2.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/golfbump2.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 238:
            content = document.createElement('span');
            content.textContent = `Click me! golfbump3.ogg`;
            content.onclick = function() {document.getElementById('golfbump3.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'golfbump3.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/golfbump3.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 239:
            content = document.createElement('span');
            content.textContent = `Click me! gravecorpse.ogg`;
            content.onclick = function() {document.getElementById('gravecorpse.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'gravecorpse.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/gravecorpse.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 240:
            content = document.createElement('span');
            content.textContent = `Click me! gravecorpsestart.ogg`;
            content.onclick = function() {document.getElementById('gravecorpsestart.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'gravecorpsestart.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/gravecorpsestart.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 241:
            content = document.createElement('span');
            content.textContent = `Click me! groundpoundloop.ogg`;
            content.onclick = function() {document.getElementById('groundpoundloop.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'groundpoundloop.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/groundpoundloop.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 242:
            content = document.createElement('span');
            content.textContent = `Click me! groundpoundstart.ogg`;
            content.onclick = function() {document.getElementById('groundpoundstart.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'groundpoundstart.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/groundpoundstart.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 243:
            content = document.createElement('span');
            content.textContent = `Click me! guswalljump1.ogg`;
            content.onclick = function() {document.getElementById('guswalljump1.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'guswalljump1.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/guswalljump1.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 244:
            content = document.createElement('span');
            content.textContent = `Click me! guswalljump2.ogg`;
            content.onclick = function() {document.getElementById('guswalljump2.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'guswalljump2.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/guswalljump2.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 245:
            content = document.createElement('span');
            content.textContent = `Click me! hamkuff1.ogg`;
            content.onclick = function() {document.getElementById('hamkuff1.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'hamkuff1.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/hamkuff1.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 246:
            content = document.createElement('span');
            content.textContent = `Click me! hamkuff2.ogg`;
            content.onclick = function() {document.getElementById('hamkuff2.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'hamkuff2.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/hamkuff2.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 247:
            content = document.createElement('span');
            content.textContent = `Click me! hamkuff3.ogg`;
            content.onclick = function() {document.getElementById('hamkuff3.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'hamkuff3.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/hamkuff3.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 248:
            content = document.createElement('span');
            content.textContent = `Click me! homing.ogg`;
            content.onclick = function() {document.getElementById('homing.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'homing.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/homing.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 249:
            content = document.createElement('span');
            content.textContent = `Click me! honkhonk.ogg`;
            content.onclick = function() {document.getElementById('honkhonk.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'honkhonk.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/honkhonk.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 250:
            content = document.createElement('span');
            content.textContent = `Click me! horsedead.ogg`;
            content.onclick = function() {document.getElementById('horsedead.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'horsedead.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/horsedead.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 251:
            content = document.createElement('span');
            content.textContent = `Click me! hurt.ogg`;
            content.onclick = function() {document.getElementById('hurt.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'hurt.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/hurt.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 252:
            content = document.createElement('span');
            content.textContent = `Click me! icebreak1.ogg`;
            content.onclick = function() {document.getElementById('icebreak1.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'icebreak1.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/icebreak1.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 253:
            content = document.createElement('span');
            content.textContent = `Click me! icebreak2.ogg`;
            content.onclick = function() {document.getElementById('icebreak2.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'icebreak2.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/icebreak2.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 254:
            content = document.createElement('span');
            content.textContent = `Click me! icebreak3.ogg`;
            content.onclick = function() {document.getElementById('icebreak3.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'icebreak3.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/icebreak3.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 255:
            content = document.createElement('span');
            content.textContent = `Click me! icebreakbig.ogg`;
            content.onclick = function() {document.getElementById('icebreakbig.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'icebreakbig.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/icebreakbig.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 256:
            content = document.createElement('span');
            content.textContent = `Click me! instanttemp.ogg`;
            content.onclick = function() {document.getElementById('instanttemp.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'instanttemp.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/instanttemp.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 257:
            content = document.createElement('span');
            content.textContent = `Click me! jetpackjump.ogg`;
            content.onclick = function() {document.getElementById('jetpackjump.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'jetpackjump.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/jetpackjump.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 258:
            content = document.createElement('span');
            content.textContent = `Click me! johnending1.ogg`;
            content.onclick = function() {document.getElementById('johnending1.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'johnending1.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/johnending1.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 259:
            content = document.createElement('span');
            content.textContent = `Click me! johnending2.ogg`;
            content.onclick = function() {document.getElementById('johnending2.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'johnending2.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/johnending2.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 260:
            content = document.createElement('span');
            content.textContent = `Click me! johnending3.ogg`;
            content.onclick = function() {document.getElementById('johnending3.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'johnending3.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/johnending3.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 261:
            content = document.createElement('span');
            content.textContent = `Click me! johnghost.ogg`;
            content.onclick = function() {document.getElementById('johnghost.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'johnghost.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/johnghost.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 262:
            content = document.createElement('span');
            content.textContent = `Click me! jump.ogg`;
            content.onclick = function() {document.getElementById('jump.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'jump.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/jump.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 263:
            content = document.createElement('span');
            content.textContent = `Click me! jumpscare.ogg`;
            content.onclick = function() {document.getElementById('jumpscare.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'jumpscare.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/jumpscare.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 264:
            content = document.createElement('span');
            content.textContent = `Click me! keyunlock.ogg`;
            content.onclick = function() {document.getElementById('keyunlock.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'keyunlock.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/keyunlock.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 265:
            content = document.createElement('span');
            content.textContent = `Click me! kingghostloop.ogg`;
            content.onclick = function() {document.getElementById('kingghostloop.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'kingghostloop.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/kingghostloop.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 266:
            content = document.createElement('span');
            content.textContent = `Click me! kingghostmove.ogg`;
            content.onclick = function() {document.getElementById('kingghostmove.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'kingghostmove.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/kingghostmove.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 267:
            content = document.createElement('span');
            content.textContent = `Click me! mach.ogg`;
            content.onclick = function() {document.getElementById('mach.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'mach.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/mach.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 268:
            content = document.createElement('span');
            content.textContent = `Click me! mach2bump1.ogg`;
            content.onclick = function() {document.getElementById('mach2bump1.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'mach2bump1.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/mach2bump1.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 269:
            content = document.createElement('span');
            content.textContent = `Click me! mach2bump2.ogg`;
            content.onclick = function() {document.getElementById('mach2bump2.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'mach2bump2.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/mach2bump2.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 270:
            content = document.createElement('span');
            content.textContent = `Click me! mach2bump3.ogg`;
            content.onclick = function() {document.getElementById('mach2bump3.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'mach2bump3.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/mach2bump3.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 271:
            content = document.createElement('span');
            content.textContent = `Click me! mach2bump4.ogg`;
            content.onclick = function() {document.getElementById('mach2bump4.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'mach2bump4.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/mach2bump4.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 272:
            content = document.createElement('span');
            content.textContent = `Click me! mach2step.ogg`;
            content.onclick = function() {document.getElementById('mach2step.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'mach2step.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/mach2step.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 273:
            content = document.createElement('span');
            content.textContent = `Click me! mach3step.ogg`;
            content.onclick = function() {document.getElementById('mach3step.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'mach3step.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/mach3step.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 274:
            content = document.createElement('span');
            content.textContent = `Click me! machcancel2.ogg`;
            content.onclick = function() {document.getElementById('machcancel2.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'machcancel2.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/machcancel2.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 275:
            content = document.createElement('span');
            content.textContent = `Click me! machcancelland.ogg`;
            content.onclick = function() {document.getElementById('machcancelland.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'machcancelland.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/machcancelland.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 276:
            content = document.createElement('span');
            content.textContent = `Click me! machroll.ogg`;
            content.onclick = function() {document.getElementById('machroll.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'machroll.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/machroll.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 277:
            content = document.createElement('span');
            content.textContent = `Click me! menuexplosions.ogg`;
            content.onclick = function() {document.getElementById('menuexplosions.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'menuexplosions.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/menuexplosions.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 278:
            content = document.createElement('span');
            content.textContent = `Click me! metallicstep.ogg`;
            content.onclick = function() {document.getElementById('metallicstep.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'metallicstep.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/metallicstep.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 279:
            content = document.createElement('span');
            content.textContent = `Click me! minigun1.ogg`;
            content.onclick = function() {document.getElementById('minigun1.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'minigun1.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/minigun1.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 280:
            content = document.createElement('span');
            content.textContent = `Click me! minigun2.ogg`;
            content.onclick = function() {document.getElementById('minigun2.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'minigun2.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/minigun2.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 281:
            content = document.createElement('span');
            content.textContent = `Click me! minigun3.ogg`;
            content.onclick = function() {document.getElementById('minigun3.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'minigun3.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/minigun3.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 282:
            content = document.createElement('span');
            content.textContent = `Click me! minigun4.ogg`;
            content.onclick = function() {document.getElementById('minigun4.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'minigun4.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/minigun4.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 283:
            content = document.createElement('span');
            content.textContent = `Click me! minigunloop.ogg`;
            content.onclick = function() {document.getElementById('minigunloop.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'minigunloop.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/minigunloop.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 284:
            content = document.createElement('span');
            content.textContent = `Click me! minigunshot1.ogg`;
            content.onclick = function() {document.getElementById('minigunshot1.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'minigunshot1.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/minigunshot1.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 285:
            content = document.createElement('span');
            content.textContent = `Click me! minigunshot2.ogg`;
            content.onclick = function() {document.getElementById('minigunshot2.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'minigunshot2.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/minigunshot2.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 286:
            content = document.createElement('span');
            content.textContent = `Click me! minigunshot3.ogg`;
            content.onclick = function() {document.getElementById('minigunshot3.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'minigunshot3.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/minigunshot3.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 287:
            content = document.createElement('span');
            content.textContent = `Click me! minigunshot4.ogg`;
            content.onclick = function() {document.getElementById('minigunshot4.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'minigunshot4.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/minigunshot4.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 288:
            content = document.createElement('span');
            content.textContent = `Click me! minijetpack.ogg`;
            content.onclick = function() {document.getElementById('minijetpack.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'minijetpack.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/minijetpack.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 289:
            content = document.createElement('span');
            content.textContent = `Click me! monstergoop.ogg`;
            content.onclick = function() {document.getElementById('monstergoop.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'monstergoop.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/monstergoop.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 290:
            content = document.createElement('span');
            content.textContent = `Click me! mortcatch.ogg`;
            content.onclick = function() {document.getElementById('mortcatch.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'mortcatch.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/mortcatch.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 291:
            content = document.createElement('span');
            content.textContent = `Click me! mortdoublejump.ogg`;
            content.onclick = function() {document.getElementById('mortdoublejump.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'mortdoublejump.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/mortdoublejump.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 292:
            content = document.createElement('span');
            content.textContent = `Click me! mortdown.ogg`;
            content.onclick = function() {document.getElementById('mortdown.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'mortdown.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/mortdown.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 293:
            content = document.createElement('span');
            content.textContent = `Click me! morthook.ogg`;
            content.onclick = function() {document.getElementById('morthook.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'morthook.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/morthook.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 294:
            content = document.createElement('span');
            content.textContent = `Click me! mortside.ogg`;
            content.onclick = function() {document.getElementById('mortside.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'mortside.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/mortside.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 295:
            content = document.createElement('span');
            content.textContent = `Click me! mortslap.ogg`;
            content.onclick = function() {document.getElementById('mortslap.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'mortslap.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/mortslap.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 296:
            content = document.createElement('span');
            content.textContent = `Click me! mortthrow.ogg`;
            content.onclick = function() {document.getElementById('mortthrow.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'mortthrow.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/mortthrow.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 297:
            content = document.createElement('span');
            content.textContent = `Click me! mortthrowstart.ogg`;
            content.onclick = function() {document.getElementById('mortthrowstart.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'mortthrowstart.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/mortthrowstart.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 298:
            content = document.createElement('span');
            content.textContent = `Click me! mortup.ogg`;
            content.onclick = function() {document.getElementById('mortup.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'mortup.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/mortup.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 299:
            content = document.createElement('span');
            content.textContent = `Click me! mrpinch1.ogg`;
            content.onclick = function() {document.getElementById('mrpinch1.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'mrpinch1.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/mrpinch1.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 300:
            content = document.createElement('span');
            content.textContent = `Click me! mrpinch2.ogg`;
            content.onclick = function() {document.getElementById('mrpinch2.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'mrpinch2.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/mrpinch2.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 301:
            content = document.createElement('span');
            content.textContent = `Click me! mrstickhat.ogg`;
            content.onclick = function() {document.getElementById('mrstickhat.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'mrstickhat.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/mrstickhat.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 302:
            content = document.createElement('span');
            content.textContent = `Click me! mushroom1.ogg`;
            content.onclick = function() {document.getElementById('mushroom1.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'mushroom1.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/mushroom1.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 303:
            content = document.createElement('span');
            content.textContent = `Click me! mushroom2.ogg`;
            content.onclick = function() {document.getElementById('mushroom2.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'mushroom2.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/mushroom2.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 304:
            content = document.createElement('span');
            content.textContent = `Click me! mushroom3.ogg`;
            content.onclick = function() {document.getElementById('mushroom3.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'mushroom3.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/mushroom3.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 305:
            content = document.createElement('span');
            content.textContent = `Click me! noise_defeat_boss.ogg`;
            content.onclick = function() {document.getElementById('noise_defeat_boss.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'noise_defeat_boss.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/noise_defeat_boss.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 306:
            content = document.createElement('span');
            content.textContent = `Click me! noise_fireballs.ogg`;
            content.onclick = function() {document.getElementById('noise_fireballs.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'noise_fireballs.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/noise_fireballs.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 307:
            content = document.createElement('span');
            content.textContent = `Click me! noise_firemouthstart.ogg`;
            content.onclick = function() {document.getElementById('noise_firemouthstart.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'noise_firemouthstart.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/noise_firemouthstart.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 308:
            content = document.createElement('span');
            content.textContent = `Click me! noise_freezerintro.ogg`;
            content.onclick = function() {document.getElementById('noise_freezerintro.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'noise_freezerintro.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/noise_freezerintro.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 309:
            content = document.createElement('span');
            content.textContent = `Click me! noiseballoon.ogg`;
            content.onclick = function() {document.getElementById('noiseballoon.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'noiseballoon.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/noiseballoon.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 310:
            content = document.createElement('span');
            content.textContent = `Click me! noisebombbounce.ogg`;
            content.onclick = function() {document.getElementById('noisebombbounce.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'noisebombbounce.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/noisebombbounce.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 311:
            content = document.createElement('span');
            content.textContent = `Click me! noisecrusher.ogg`;
            content.onclick = function() {document.getElementById('noisecrusher.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'noisecrusher.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/noisecrusher.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 312:
            content = document.createElement('span');
            content.textContent = `Click me! noisedemonscream.ogg`;
            content.onclick = function() {document.getElementById('noisedemonscream.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'noisedemonscream.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/noisedemonscream.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 313:
            content = document.createElement('span');
            content.textContent = `Click me! noisefightball1.ogg`;
            content.onclick = function() {document.getElementById('noisefightball1.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'noisefightball1.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/noisefightball1.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 314:
            content = document.createElement('span');
            content.textContent = `Click me! noisefightball2.ogg`;
            content.onclick = function() {document.getElementById('noisefightball2.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'noisefightball2.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/noisefightball2.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 315:
            content = document.createElement('span');
            content.textContent = `Click me! noisefightball3.ogg`;
            content.onclick = function() {document.getElementById('noisefightball3.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'noisefightball3.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/noisefightball3.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 316:
            content = document.createElement('span');
            content.textContent = `Click me! noisefightball4.ogg`;
            content.onclick = function() {document.getElementById('noisefightball4.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'noisefightball4.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/noisefightball4.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 317:
            content = document.createElement('span');
            content.textContent = `Click me! noisefightball5.ogg`;
            content.onclick = function() {document.getElementById('noisefightball5.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'noisefightball5.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/noisefightball5.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 318:
            content = document.createElement('span');
            content.textContent = `Click me! noisefightball6.ogg`;
            content.onclick = function() {document.getElementById('noisefightball6.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'noisefightball6.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/noisefightball6.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 319:
            content = document.createElement('span');
            content.textContent = `Click me! noisefightball7.ogg`;
            content.onclick = function() {document.getElementById('noisefightball7.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'noisefightball7.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/noisefightball7.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 320:
            content = document.createElement('span');
            content.textContent = `Click me! noisefightball8.ogg`;
            content.onclick = function() {document.getElementById('noisefightball8.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'noisefightball8.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/noisefightball8.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 321:
            content = document.createElement('span');
            content.textContent = `Click me! noisefightball9.ogg`;
            content.onclick = function() {document.getElementById('noisefightball9.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'noisefightball9.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/noisefightball9.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 322:
            content = document.createElement('span');
            content.textContent = `Click me! noisejetpack.ogg`;
            content.onclick = function() {document.getElementById('noisejetpack.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'noisejetpack.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/noisejetpack.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 323:
            content = document.createElement('span');
            content.textContent = `Click me! noisejetpackspin.ogg`;
            content.onclick = function() {document.getElementById('noisejetpackspin.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'noisejetpackspin.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/noisejetpackspin.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 324:
            content = document.createElement('span');
            content.textContent = `Click me! noisejetpackstart.ogg`;
            content.onclick = function() {document.getElementById('noisejetpackstart.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'noisejetpackstart.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/noisejetpackstart.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 325:
            content = document.createElement('span');
            content.textContent = `Click me! noisescream.ogg`;
            content.onclick = function() {document.getElementById('noisescream.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'noisescream.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/noisescream.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 326:
            content = document.createElement('span');
            content.textContent = `Click me! noiseskatealone.ogg`;
            content.onclick = function() {document.getElementById('noiseskatealone.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'noiseskatealone.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/noiseskatealone.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 327:
            content = document.createElement('span');
            content.textContent = `Click me! noiseskateloop.ogg`;
            content.onclick = function() {document.getElementById('noiseskateloop.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'noiseskateloop.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/noiseskateloop.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 328:
            content = document.createElement('span');
            content.textContent = `Click me! noiseskatestart.ogg`;
            content.onclick = function() {document.getElementById('noiseskatestart.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'noiseskatestart.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/noiseskatestart.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 329:
            content = document.createElement('span');
            content.textContent = `Click me! noisette_kiss.ogg`;
            content.onclick = function() {document.getElementById('noisette_kiss.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'noisette_kiss.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/noisette_kiss.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 330:
            content = document.createElement('span');
            content.textContent = `Click me! noisettevoice1.ogg`;
            content.onclick = function() {document.getElementById('noisettevoice1.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'noisettevoice1.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/noisettevoice1.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 331:
            content = document.createElement('span');
            content.textContent = `Click me! noisettevoice2.ogg`;
            content.onclick = function() {document.getElementById('noisettevoice2.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'noisettevoice2.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/noisettevoice2.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 332:
            content = document.createElement('span');
            content.textContent = `Click me! nosepop.ogg`;
            content.onclick = function() {document.getElementById('nosepop.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'nosepop.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/nosepop.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 333:
            content = document.createElement('span');
            content.textContent = `Click me! pepbotkick.ogg`;
            content.onclick = function() {document.getElementById('pepbotkick.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'pepbotkick.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/pepbotkick.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 334:
            content = document.createElement('span');
            content.textContent = `Click me! peppermanartdude.ogg`;
            content.onclick = function() {document.getElementById('peppermanartdude.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'peppermanartdude.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/peppermanartdude.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 335:
            content = document.createElement('span');
            content.textContent = `Click me! peppermanjump.ogg`;
            content.onclick = function() {document.getElementById('peppermanjump.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'peppermanjump.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/peppermanjump.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 336:
            content = document.createElement('span');
            content.textContent = `Click me! peppermanshrink.ogg`;
            content.onclick = function() {document.getElementById('peppermanshrink.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'peppermanshrink.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/peppermanshrink.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 337:
            content = document.createElement('span');
            content.textContent = `Click me! peppermanturn.ogg`;
            content.onclick = function() {document.getElementById('peppermanturn.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'peppermanturn.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/peppermanturn.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 338:
            content = document.createElement('span');
            content.textContent = `Click me! peppinoangryscream.ogg`;
            content.onclick = function() {document.getElementById('peppinoangryscream.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'peppinoangryscream.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/peppinoangryscream.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 339:
            content = document.createElement('span');
            content.textContent = `Click me! peppinoangryscream2.ogg`;
            content.onclick = function() {document.getElementById('peppinoangryscream2.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'peppinoangryscream2.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/peppinoangryscream2.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 340:
            content = document.createElement('span');
            content.textContent = `Click me! pickledance.ogg`;
            content.onclick = function() {document.getElementById('pickledance.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'pickledance.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/pickledance.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 341:
            content = document.createElement('span');
            content.textContent = `Click me! pigphoto.ogg`;
            content.onclick = function() {document.getElementById('pigphoto.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'pigphoto.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/pigphoto.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 342:
            content = document.createElement('span');
            content.textContent = `Click me! pigthrow.ogg`;
            content.onclick = function() {document.getElementById('pigthrow.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'pigthrow.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/pigthrow.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 343:
            content = document.createElement('span');
            content.textContent = `Click me! pigthrow2.ogg`;
            content.onclick = function() {document.getElementById('pigthrow2.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'pigthrow2.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/pigthrow2.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 344:
            content = document.createElement('span');
            content.textContent = `Click me! pipe1.ogg`;
            content.onclick = function() {document.getElementById('pipe1.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'pipe1.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/pipe1.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 345:
            content = document.createElement('span');
            content.textContent = `Click me! pipe2.ogg`;
            content.onclick = function() {document.getElementById('pipe2.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'pipe2.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/pipe2.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 346:
            content = document.createElement('span');
            content.textContent = `Click me! pipebump1.ogg`;
            content.onclick = function() {document.getElementById('pipebump1.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'pipebump1.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/pipebump1.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 347:
            content = document.createElement('span');
            content.textContent = `Click me! pipebump2.ogg`;
            content.onclick = function() {document.getElementById('pipebump2.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'pipebump2.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/pipebump2.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 348:
            content = document.createElement('span');
            content.textContent = `Click me! pipebump3.ogg`;
            content.onclick = function() {document.getElementById('pipebump3.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'pipebump3.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/pipebump3.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 349:
            content = document.createElement('span');
            content.textContent = `Click me! pipebump4.ogg`;
            content.onclick = function() {document.getElementById('pipebump4.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'pipebump4.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/pipebump4.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 350:
            content = document.createElement('span');
            content.textContent = `Click me! piranha.ogg`;
            content.onclick = function() {document.getElementById('piranha.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'piranha.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/piranha.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 351:
            content = document.createElement('span');
            content.textContent = `Click me! piranhabite.ogg`;
            content.onclick = function() {document.getElementById('piranhabite.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'piranhabite.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/piranhabite.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 352:
            content = document.createElement('span');
            content.textContent = `Click me! pistolshot.ogg`;
            content.onclick = function() {document.getElementById('pistolshot.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'pistolshot.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/pistolshot.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 353:
            content = document.createElement('span');
            content.textContent = `Click me! pistolstart.ogg`;
            content.onclick = function() {document.getElementById('pistolstart.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'pistolstart.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/pistolstart.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 354:
            content = document.createElement('span');
            content.textContent = `Click me! pizzafacejump.ogg`;
            content.onclick = function() {document.getElementById('pizzafacejump.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'pizzafacejump.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/pizzafacejump.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 355:
            content = document.createElement('span');
            content.textContent = `Click me! pizzafaceopen.ogg`;
            content.onclick = function() {document.getElementById('pizzafaceopen.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'pizzafaceopen.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/pizzafaceopen.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 356:
            content = document.createElement('span');
            content.textContent = `Click me! pizzafaceram1.ogg`;
            content.onclick = function() {document.getElementById('pizzafaceram1.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'pizzafaceram1.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/pizzafaceram1.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 357:
            content = document.createElement('span');
            content.textContent = `Click me! pizzafaceram2.ogg`;
            content.onclick = function() {document.getElementById('pizzafaceram2.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'pizzafaceram2.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/pizzafaceram2.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 358:
            content = document.createElement('span');
            content.textContent = `Click me! pizzafaceshower1.ogg`;
            content.onclick = function() {document.getElementById('pizzafaceshower1.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'pizzafaceshower1.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/pizzafaceshower1.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 359:
            content = document.createElement('span');
            content.textContent = `Click me! pizzafaceshower2.ogg`;
            content.onclick = function() {document.getElementById('pizzafaceshower2.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'pizzafaceshower2.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/pizzafaceshower2.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 360:
            content = document.createElement('span');
            content.textContent = `Click me! pizzafaceshower3.ogg`;
            content.onclick = function() {document.getElementById('pizzafaceshower3.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'pizzafaceshower3.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/pizzafaceshower3.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 361:
            content = document.createElement('span');
            content.textContent = `Click me! pizzafaceshower4.ogg`;
            content.onclick = function() {document.getElementById('pizzafaceshower4.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'pizzafaceshower4.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/pizzafaceshower4.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 362:
            content = document.createElement('span');
            content.textContent = `Click me! pizzafaceshower5.ogg`;
            content.onclick = function() {document.getElementById('pizzafaceshower5.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'pizzafaceshower5.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/pizzafaceshower5.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 363:
            content = document.createElement('span');
            content.textContent = `Click me! pizzafacespit.ogg`;
            content.onclick = function() {document.getElementById('pizzafacespit.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'pizzafacespit.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/pizzafacespit.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 364:
            content = document.createElement('span');
            content.textContent = `Click me! pizzaheadfishing1.ogg`;
            content.onclick = function() {document.getElementById('pizzaheadfishing1.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'pizzaheadfishing1.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/pizzaheadfishing1.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 365:
            content = document.createElement('span');
            content.textContent = `Click me! pizzaheadfishing2.ogg`;
            content.onclick = function() {document.getElementById('pizzaheadfishing2.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'pizzaheadfishing2.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/pizzaheadfishing2.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 366:
            content = document.createElement('span');
            content.textContent = `Click me! pizzaheadfishing3.ogg`;
            content.onclick = function() {document.getElementById('pizzaheadfishing3.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'pizzaheadfishing3.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/pizzaheadfishing3.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 367:
            content = document.createElement('span');
            content.textContent = `Click me! pizzaheadfishing4.ogg`;
            content.onclick = function() {document.getElementById('pizzaheadfishing4.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'pizzaheadfishing4.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/pizzaheadfishing4.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 368:
            content = document.createElement('span');
            content.textContent = `Click me! pizzaheadfishing5.ogg`;
            content.onclick = function() {document.getElementById('pizzaheadfishing5.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'pizzaheadfishing5.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/pizzaheadfishing5.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 369:
            content = document.createElement('span');
            content.textContent = `Click me! pizzaheadfishing6.ogg`;
            content.onclick = function() {document.getElementById('pizzaheadfishing6.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'pizzaheadfishing6.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/pizzaheadfishing6.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 370:
            content = document.createElement('span');
            content.textContent = `Click me! pizzaheadfishing7.ogg`;
            content.onclick = function() {document.getElementById('pizzaheadfishing7.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'pizzaheadfishing7.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/pizzaheadfishing7.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 371:
            content = document.createElement('span');
            content.textContent = `Click me! pizzaheadfishingbase.ogg`;
            content.onclick = function() {document.getElementById('pizzaheadfishingbase.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'pizzaheadfishingbase.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/pizzaheadfishingbase.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 372:
            content = document.createElement('span');
            content.textContent = `Click me! pizzaheadgrabtv.ogg`;
            content.onclick = function() {document.getElementById('pizzaheadgrabtv.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'pizzaheadgrabtv.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/pizzaheadgrabtv.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 373:
            content = document.createElement('span');
            content.textContent = `Click me! pizzaheadhaywire.ogg`;
            content.onclick = function() {document.getElementById('pizzaheadhaywire.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'pizzaheadhaywire.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/pizzaheadhaywire.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 374:
            content = document.createElement('span');
            content.textContent = `Click me! pizzaheadstep.ogg`;
            content.onclick = function() {document.getElementById('pizzaheadstep.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'pizzaheadstep.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/pizzaheadstep.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 375:
            content = document.createElement('span');
            content.textContent = `Click me! pizzapepper.ogg`;
            content.onclick = function() {document.getElementById('pizzapepper.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'pizzapepper.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/pizzapepper.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 376:
            content = document.createElement('span');
            content.textContent = `Click me! policesiren.ogg`;
            content.onclick = function() {document.getElementById('policesiren.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'policesiren.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/policesiren.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 377:
            content = document.createElement('span');
            content.textContent = `Click me! presentfall.ogg`;
            content.onclick = function() {document.getElementById('presentfall.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'presentfall.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/presentfall.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 378:
            content = document.createElement('span');
            content.textContent = `Click me! pumpkin.ogg`;
            content.onclick = function() {document.getElementById('pumpkin.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'pumpkin.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/pumpkin.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 379:
            content = document.createElement('span');
            content.textContent = `Click me! punch1.ogg`;
            content.onclick = function() {document.getElementById('punch1.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'punch1.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/punch1.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 380:
            content = document.createElement('span');
            content.textContent = `Click me! punch2.ogg`;
            content.onclick = function() {document.getElementById('punch2.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'punch2.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/punch2.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 381:
            content = document.createElement('span');
            content.textContent = `Click me! rankdown1.ogg`;
            content.onclick = function() {document.getElementById('rankdown1.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'rankdown1.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/rankdown1.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 382:
            content = document.createElement('span');
            content.textContent = `Click me! rankdown2.ogg`;
            content.onclick = function() {document.getElementById('rankdown2.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'rankdown2.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/rankdown2.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 383:
            content = document.createElement('span');
            content.textContent = `Click me! rankdown3.ogg`;
            content.onclick = function() {document.getElementById('rankdown3.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'rankdown3.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/rankdown3.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 384:
            content = document.createElement('span');
            content.textContent = `Click me! rankdown4.ogg`;
            content.onclick = function() {document.getElementById('rankdown4.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'rankdown4.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/rankdown4.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 385:
            content = document.createElement('span');
            content.textContent = `Click me! rankdown5.ogg`;
            content.onclick = function() {document.getElementById('rankdown5.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'rankdown5.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/rankdown5.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 386:
            content = document.createElement('span');
            content.textContent = `Click me! rankup1.ogg`;
            content.onclick = function() {document.getElementById('rankup1.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'rankup1.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/rankup1.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 387:
            content = document.createElement('span');
            content.textContent = `Click me! rankup2.ogg`;
            content.onclick = function() {document.getElementById('rankup2.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'rankup2.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/rankup2.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 388:
            content = document.createElement('span');
            content.textContent = `Click me! rankup3.ogg`;
            content.onclick = function() {document.getElementById('rankup3.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'rankup3.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/rankup3.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 389:
            content = document.createElement('span');
            content.textContent = `Click me! rankup4.ogg`;
            content.onclick = function() {document.getElementById('rankup4.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'rankup4.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/rankup4.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 390:
            content = document.createElement('span');
            content.textContent = `Click me! rankup5.ogg`;
            content.onclick = function() {document.getElementById('rankup5.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'rankup5.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/rankup5.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 391:
            content = document.createElement('span');
            content.textContent = `Click me! ratbowling.ogg`;
            content.onclick = function() {document.getElementById('ratbowling.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'ratbowling.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/ratbowling.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 392:
            content = document.createElement('span');
            content.textContent = `Click me! ratdeflat2.ogg`;
            content.onclick = function() {document.getElementById('ratdeflat2.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'ratdeflat2.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/ratdeflat2.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 393:
            content = document.createElement('span');
            content.textContent = `Click me! ratgrab1.ogg`;
            content.onclick = function() {document.getElementById('ratgrab1.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'ratgrab1.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/ratgrab1.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 394:
            content = document.createElement('span');
            content.textContent = `Click me! ratgrab2.ogg`;
            content.onclick = function() {document.getElementById('ratgrab2.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'ratgrab2.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/ratgrab2.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 395:
            content = document.createElement('span');
            content.textContent = `Click me! ratmount1.ogg`;
            content.onclick = function() {document.getElementById('ratmount1.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'ratmount1.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/ratmount1.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 396:
            content = document.createElement('span');
            content.textContent = `Click me! ratmount2.ogg`;
            content.onclick = function() {document.getElementById('ratmount2.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'ratmount2.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/ratmount2.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 397:
            content = document.createElement('span');
            content.textContent = `Click me! ratmount2air.ogg`;
            content.onclick = function() {document.getElementById('ratmount2air.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'ratmount2air.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/ratmount2air.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 398:
            content = document.createElement('span');
            content.textContent = `Click me! ratmountball.ogg`;
            content.onclick = function() {document.getElementById('ratmountball.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'ratmountball.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/ratmountball.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 399:
            content = document.createElement('span');
            content.textContent = `Click me! ratmountgroundpound.ogg`;
            content.onclick = function() {document.getElementById('ratmountgroundpound.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'ratmountgroundpound.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/ratmountgroundpound.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 400:
            content = document.createElement('span');
            content.textContent = `Click me! robotslapsteam.ogg`;
            content.onclick = function() {document.getElementById('robotslapsteam.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'robotslapsteam.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/robotslapsteam.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 401:
            content = document.createElement('span');
            content.textContent = `Click me! rockbreak.ogg`;
            content.onclick = function() {document.getElementById('rockbreak.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'rockbreak.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/rockbreak.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 402:
            content = document.createElement('span');
            content.textContent = `Click me! rushdown1.ogg`;
            content.onclick = function() {document.getElementById('rushdown1.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'rushdown1.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/rushdown1.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 403:
            content = document.createElement('span');
            content.textContent = `Click me! rushdown2.ogg`;
            content.onclick = function() {document.getElementById('rushdown2.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'rushdown2.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/rushdown2.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 404:
            content = document.createElement('span');
            content.textContent = `Click me! rushdownend1.ogg`;
            content.onclick = function() {document.getElementById('rushdownend1.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'rushdownend1.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/rushdownend1.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 405:
            content = document.createElement('span');
            content.textContent = `Click me! rushdownend2.ogg`;
            content.onclick = function() {document.getElementById('rushdownend2.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'rushdownend2.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/rushdownend2.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 406:
            content = document.createElement('span');
            content.textContent = `Click me! rushdownendbase.ogg`;
            content.onclick = function() {document.getElementById('rushdownendbase.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'rushdownendbase.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/rushdownendbase.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 407:
            content = document.createElement('span');
            content.textContent = `Click me! santa.ogg`;
            content.onclick = function() {document.getElementById('santa.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'santa.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/santa.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 408:
            content = document.createElement('span');
            content.textContent = `Click me! selectscream.ogg`;
            content.onclick = function() {document.getElementById('selectscream.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'selectscream.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/selectscream.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 409:
            content = document.createElement('span');
            content.textContent = `Click me! sfx_Npogo3.ogg`;
            content.onclick = function() {document.getElementById('sfx_Npogo3.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'sfx_Npogo3.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/sfx_Npogo3.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 410:
            content = document.createElement('span');
            content.textContent = `Click me! sfx_Nspin.ogg`;
            content.onclick = function() {document.getElementById('sfx_Nspin.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'sfx_Nspin.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/sfx_Nspin.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 411:
            content = document.createElement('span');
            content.textContent = `Click me! sfx_becomeknight.ogg`;
            content.onclick = function() {document.getElementById('sfx_becomeknight.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'sfx_becomeknight.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/sfx_becomeknight.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 412:
            content = document.createElement('span');
            content.textContent = `Click me! sfx_becomeknight_old.ogg`;
            content.onclick = function() {document.getElementById('sfx_becomeknight_old.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'sfx_becomeknight_old.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/sfx_becomeknight_old.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 413:
            content = document.createElement('span');
            content.textContent = `Click me! sfx_box.ogg`;
            content.onclick = function() {document.getElementById('sfx_box.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'sfx_box.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/sfx_box.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 414:
            content = document.createElement('span');
            content.textContent = `Click me! sfx_box_old.ogg`;
            content.onclick = function() {document.getElementById('sfx_box_old.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'sfx_box_old.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/sfx_box_old.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 415:
            content = document.createElement('span');
            content.textContent = `Click me! sfx_break.ogg`;
            content.onclick = function() {document.getElementById('sfx_break.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'sfx_break.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/sfx_break.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 416:
            content = document.createElement('span');
            content.textContent = `Click me! sfx_break_old.ogg`;
            content.onclick = function() {document.getElementById('sfx_break_old.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'sfx_break_old.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/sfx_break_old.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 417:
            content = document.createElement('span');
            content.textContent = `Click me! sfx_breakblock1.ogg`;
            content.onclick = function() {document.getElementById('sfx_breakblock1.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'sfx_breakblock1.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/sfx_breakblock1.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 418:
            content = document.createElement('span');
            content.textContent = `Click me! sfx_breakblock2.ogg`;
            content.onclick = function() {document.getElementById('sfx_breakblock2.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'sfx_breakblock2.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/sfx_breakblock2.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 419:
            content = document.createElement('span');
            content.textContent = `Click me! sfx_breakblock2_old.ogg`;
            content.onclick = function() {document.getElementById('sfx_breakblock2_old.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'sfx_breakblock2_old.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/sfx_breakblock2_old.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 420:
            content = document.createElement('span');
            content.textContent = `Click me! sfx_breakdance.ogg`;
            content.onclick = function() {document.getElementById('sfx_breakdance.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'sfx_breakdance.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/sfx_breakdance.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 421:
            content = document.createElement('span');
            content.textContent = `Click me! sfx_breakdance_old.ogg`;
            content.onclick = function() {document.getElementById('sfx_breakdance_old.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'sfx_breakdance_old.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/sfx_breakdance_old.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 422:
            content = document.createElement('span');
            content.textContent = `Click me! sfx_breakdancemusic.ogg`;
            content.onclick = function() {document.getElementById('sfx_breakdancemusic.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'sfx_breakdancemusic.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/sfx_breakdancemusic.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 423:
            content = document.createElement('span');
            content.textContent = `Click me! sfx_breakmetal.ogg`;
            content.onclick = function() {document.getElementById('sfx_breakmetal.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'sfx_breakmetal.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/sfx_breakmetal.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 424:
            content = document.createElement('span');
            content.textContent = `Click me! sfx_bumpwall.ogg`;
            content.onclick = function() {document.getElementById('sfx_bumpwall.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'sfx_bumpwall.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/sfx_bumpwall.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 425:
            content = document.createElement('span');
            content.textContent = `Click me! sfx_cardflip.ogg`;
            content.onclick = function() {document.getElementById('sfx_cardflip.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'sfx_cardflip.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/sfx_cardflip.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 426:
            content = document.createElement('span');
            content.textContent = `Click me! sfx_cheesefloor.ogg`;
            content.onclick = function() {document.getElementById('sfx_cheesefloor.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'sfx_cheesefloor.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/sfx_cheesefloor.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 427:
            content = document.createElement('span');
            content.textContent = `Click me! sfx_cheesejump.ogg`;
            content.onclick = function() {document.getElementById('sfx_cheesejump.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'sfx_cheesejump.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/sfx_cheesejump.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 428:
            content = document.createElement('span');
            content.textContent = `Click me! sfx_collect.ogg`;
            content.onclick = function() {document.getElementById('sfx_collect.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'sfx_collect.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/sfx_collect.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 429:
            content = document.createElement('span');
            content.textContent = `Click me! sfx_collectgiantpizza.ogg`;
            content.onclick = function() {document.getElementById('sfx_collectgiantpizza.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'sfx_collectgiantpizza.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/sfx_collectgiantpizza.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 430:
            content = document.createElement('span');
            content.textContent = `Click me! sfx_collectgiantpizza_old.ogg`;
            content.onclick = function() {document.getElementById('sfx_collectgiantpizza_old.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'sfx_collectgiantpizza_old.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/sfx_collectgiantpizza_old.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 431:
            content = document.createElement('span');
            content.textContent = `Click me! sfx_collectpizza.ogg`;
            content.onclick = function() {document.getElementById('sfx_collectpizza.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'sfx_collectpizza.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/sfx_collectpizza.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 432:
            content = document.createElement('span');
            content.textContent = `Click me! sfx_collectpizza_old.ogg`;
            content.onclick = function() {document.getElementById('sfx_collectpizza_old.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'sfx_collectpizza_old.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/sfx_collectpizza_old.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 433:
            content = document.createElement('span');
            content.textContent = `Click me! sfx_collecttoppin.ogg`;
            content.onclick = function() {document.getElementById('sfx_collecttoppin.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'sfx_collecttoppin.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/sfx_collecttoppin.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 434:
            content = document.createElement('span');
            content.textContent = `Click me! sfx_collecttoppin_old.ogg`;
            content.onclick = function() {document.getElementById('sfx_collecttoppin_old.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'sfx_collecttoppin_old.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/sfx_collecttoppin_old.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 435:
            content = document.createElement('span');
            content.textContent = `Click me! sfx_comboend.ogg`;
            content.onclick = function() {document.getElementById('sfx_comboend.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'sfx_comboend.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/sfx_comboend.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 436:
            content = document.createElement('span');
            content.textContent = `Click me! sfx_comboend_old.ogg`;
            content.onclick = function() {document.getElementById('sfx_comboend_old.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'sfx_comboend_old.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/sfx_comboend_old.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 437:
            content = document.createElement('span');
            content.textContent = `Click me! sfx_cowkick.ogg`;
            content.onclick = function() {document.getElementById('sfx_cowkick.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'sfx_cowkick.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/sfx_cowkick.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 438:
            content = document.createElement('span');
            content.textContent = `Click me! sfx_door.ogg`;
            content.onclick = function() {document.getElementById('sfx_door.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'sfx_door.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/sfx_door.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 439:
            content = document.createElement('span');
            content.textContent = `Click me! sfx_enemyprojectile.ogg`;
            content.onclick = function() {document.getElementById('sfx_enemyprojectile.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'sfx_enemyprojectile.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/sfx_enemyprojectile.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 440:
            content = document.createElement('span');
            content.textContent = `Click me! sfx_escaperumble.ogg`;
            content.onclick = function() {document.getElementById('sfx_escaperumble.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'sfx_escaperumble.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/sfx_escaperumble.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 441:
            content = document.createElement('span');
            content.textContent = `Click me! sfx_escaperumble_old.ogg`;
            content.onclick = function() {document.getElementById('sfx_escaperumble_old.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'sfx_escaperumble_old.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/sfx_escaperumble_old.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 442:
            content = document.createElement('span');
            content.textContent = `Click me! sfx_escapespawn.ogg`;
            content.onclick = function() {document.getElementById('sfx_escapespawn.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'sfx_escapespawn.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/sfx_escapespawn.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 443:
            content = document.createElement('span');
            content.textContent = `Click me! sfx_explosion.ogg`;
            content.onclick = function() {document.getElementById('sfx_explosion.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'sfx_explosion.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/sfx_explosion.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 444:
            content = document.createElement('span');
            content.textContent = `Click me! sfx_explosion_old.ogg`;
            content.onclick = function() {document.getElementById('sfx_explosion_old.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'sfx_explosion_old.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/sfx_explosion_old.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 445:
            content = document.createElement('span');
            content.textContent = `Click me! sfx_firemouthdash.ogg`;
            content.onclick = function() {document.getElementById('sfx_firemouthdash.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'sfx_firemouthdash.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/sfx_firemouthdash.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 446:
            content = document.createElement('span');
            content.textContent = `Click me! sfx_firemouthstart.ogg`;
            content.onclick = function() {document.getElementById('sfx_firemouthstart.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'sfx_firemouthstart.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/sfx_firemouthstart.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 447:
            content = document.createElement('span');
            content.textContent = `Click me! sfx_groundpound.ogg`;
            content.onclick = function() {document.getElementById('sfx_groundpound.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'sfx_groundpound.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/sfx_groundpound.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 448:
            content = document.createElement('span');
            content.textContent = `Click me! sfx_groundpound_old.ogg`;
            content.onclick = function() {document.getElementById('sfx_groundpound_old.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'sfx_groundpound_old.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/sfx_groundpound_old.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 449:
            content = document.createElement('span');
            content.textContent = `Click me! sfx_johnghost.ogg`;
            content.onclick = function() {document.getElementById('sfx_johnghost.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'sfx_johnghost.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/sfx_johnghost.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 450:
            content = document.createElement('span');
            content.textContent = `Click me! sfx_jump.ogg`;
            content.onclick = function() {document.getElementById('sfx_jump.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'sfx_jump.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/sfx_jump.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 451:
            content = document.createElement('span');
            content.textContent = `Click me! sfx_killenemy.ogg`;
            content.onclick = function() {document.getElementById('sfx_killenemy.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'sfx_killenemy.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/sfx_killenemy.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 452:
            content = document.createElement('span');
            content.textContent = `Click me! sfx_killenemy_old.ogg`;
            content.onclick = function() {document.getElementById('sfx_killenemy_old.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'sfx_killenemy_old.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/sfx_killenemy_old.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 453:
            content = document.createElement('span');
            content.textContent = `Click me! sfx_killingblow.ogg`;
            content.onclick = function() {document.getElementById('sfx_killingblow.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'sfx_killingblow.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/sfx_killingblow.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 454:
            content = document.createElement('span');
            content.textContent = `Click me! sfx_knightdown.ogg`;
            content.onclick = function() {document.getElementById('sfx_knightdown.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'sfx_knightdown.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/sfx_knightdown.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 455:
            content = document.createElement('span');
            content.textContent = `Click me! sfx_knightslide.ogg`;
            content.onclick = function() {document.getElementById('sfx_knightslide.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'sfx_knightslide.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/sfx_knightslide.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 456:
            content = document.createElement('span');
            content.textContent = `Click me! sfx_knightsword.ogg`;
            content.onclick = function() {document.getElementById('sfx_knightsword.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'sfx_knightsword.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/sfx_knightsword.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 457:
            content = document.createElement('span');
            content.textContent = `Click me! sfx_lapenter.ogg`;
            content.onclick = function() {document.getElementById('sfx_lapenter.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'sfx_lapenter.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/sfx_lapenter.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 458:
            content = document.createElement('span');
            content.textContent = `Click me! sfx_lapexit.ogg`;
            content.onclick = function() {document.getElementById('sfx_lapexit.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'sfx_lapexit.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/sfx_lapexit.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 459:
            content = document.createElement('span');
            content.textContent = `Click me! sfx_loseknight.ogg`;
            content.onclick = function() {document.getElementById('sfx_loseknight.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'sfx_loseknight.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/sfx_loseknight.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 460:
            content = document.createElement('span');
            content.textContent = `Click me! sfx_loseknight_old.ogg`;
            content.onclick = function() {document.getElementById('sfx_loseknight_old.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'sfx_loseknight_old.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/sfx_loseknight_old.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 461:
            content = document.createElement('span');
            content.textContent = `Click me! sfx_mach1.ogg`;
            content.onclick = function() {document.getElementById('sfx_mach1.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'sfx_mach1.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/sfx_mach1.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 462:
            content = document.createElement('span');
            content.textContent = `Click me! sfx_mach1_old.ogg`;
            content.onclick = function() {document.getElementById('sfx_mach1_old.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'sfx_mach1_old.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/sfx_mach1_old.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 463:
            content = document.createElement('span');
            content.textContent = `Click me! sfx_mach2.ogg`;
            content.onclick = function() {document.getElementById('sfx_mach2.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'sfx_mach2.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/sfx_mach2.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 464:
            content = document.createElement('span');
            content.textContent = `Click me! sfx_mach3.ogg`;
            content.onclick = function() {document.getElementById('sfx_mach3.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'sfx_mach3.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/sfx_mach3.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 465:
            content = document.createElement('span');
            content.textContent = `Click me! sfx_mach4.ogg`;
            content.onclick = function() {document.getElementById('sfx_mach4.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'sfx_mach4.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/sfx_mach4.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 466:
            content = document.createElement('span');
            content.textContent = `Click me! sfx_machpunch.ogg`;
            content.onclick = function() {document.getElementById('sfx_machpunch.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'sfx_machpunch.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/sfx_machpunch.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 467:
            content = document.createElement('span');
            content.textContent = `Click me! sfx_machpunch_old.ogg`;
            content.onclick = function() {document.getElementById('sfx_machpunch_old.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'sfx_machpunch_old.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/sfx_machpunch_old.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 468:
            content = document.createElement('span');
            content.textContent = `Click me! sfx_machslide.ogg`;
            content.onclick = function() {document.getElementById('sfx_machslide.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'sfx_machslide.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/sfx_machslide.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 469:
            content = document.createElement('span');
            content.textContent = `Click me! sfx_machslide_old.ogg`;
            content.onclick = function() {document.getElementById('sfx_machslide_old.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'sfx_machslide_old.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/sfx_machslide_old.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 470:
            content = document.createElement('span');
            content.textContent = `Click me! sfx_machslideboost.ogg`;
            content.onclick = function() {document.getElementById('sfx_machslideboost.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'sfx_machslideboost.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/sfx_machslideboost.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 471:
            content = document.createElement('span');
            content.textContent = `Click me! sfx_mine.ogg`;
            content.onclick = function() {document.getElementById('sfx_mine.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'sfx_mine.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/sfx_mine.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 472:
            content = document.createElement('span');
            content.textContent = `Click me! sfx_mine_old.ogg`;
            content.onclick = function() {document.getElementById('sfx_mine_old.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'sfx_mine_old.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/sfx_mine_old.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 473:
            content = document.createElement('span');
            content.textContent = `Click me! sfx_noisewoah.ogg`;
            content.onclick = function() {document.getElementById('sfx_noisewoah.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'sfx_noisewoah.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/sfx_noisewoah.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 474:
            content = document.createElement('span');
            content.textContent = `Click me! sfx_noisewoah_old.ogg`;
            content.onclick = function() {document.getElementById('sfx_noisewoah_old.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'sfx_noisewoah_old.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/sfx_noisewoah_old.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 475:
            content = document.createElement('span');
            content.textContent = `Click me! sfx_parry.ogg`;
            content.onclick = function() {document.getElementById('sfx_parry.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'sfx_parry.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/sfx_parry.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 476:
            content = document.createElement('span');
            content.textContent = `Click me! sfx_pephurt.ogg`;
            content.onclick = function() {document.getElementById('sfx_pephurt.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'sfx_pephurt.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/sfx_pephurt.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 477:
            content = document.createElement('span');
            content.textContent = `Click me! sfx_pephurt_old.ogg`;
            content.onclick = function() {document.getElementById('sfx_pephurt_old.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'sfx_pephurt_old.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/sfx_pephurt_old.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 478:
            content = document.createElement('span');
            content.textContent = `Click me! sfx_pray.ogg`;
            content.onclick = function() {document.getElementById('sfx_pray.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'sfx_pray.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/sfx_pray.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 479:
            content = document.createElement('span');
            content.textContent = `Click me! sfx_punch.ogg`;
            content.onclick = function() {document.getElementById('sfx_punch.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'sfx_punch.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/sfx_punch.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 480:
            content = document.createElement('span');
            content.textContent = `Click me! sfx_racestart.ogg`;
            content.onclick = function() {document.getElementById('sfx_racestart.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'sfx_racestart.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/sfx_racestart.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 481:
            content = document.createElement('span');
            content.textContent = `Click me! sfx_rollgetup.ogg`;
            content.onclick = function() {document.getElementById('sfx_rollgetup.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'sfx_rollgetup.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/sfx_rollgetup.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 482:
            content = document.createElement('span');
            content.textContent = `Click me! sfx_rollgetup_old.ogg`;
            content.onclick = function() {document.getElementById('sfx_rollgetup_old.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'sfx_rollgetup_old.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/sfx_rollgetup_old.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 483:
            content = document.createElement('span');
            content.textContent = `Click me! sfx_scream1.ogg`;
            content.onclick = function() {document.getElementById('sfx_scream1.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'sfx_scream1.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/sfx_scream1.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 484:
            content = document.createElement('span');
            content.textContent = `Click me! sfx_scream4.ogg`;
            content.onclick = function() {document.getElementById('sfx_scream4.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'sfx_scream4.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/sfx_scream4.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 485:
            content = document.createElement('span');
            content.textContent = `Click me! sfx_scream4_old.ogg`;
            content.onclick = function() {document.getElementById('sfx_scream4_old.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'sfx_scream4_old.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/sfx_scream4_old.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 486:
            content = document.createElement('span');
            content.textContent = `Click me! sfx_scream7.ogg`;
            content.onclick = function() {document.getElementById('sfx_scream7.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'sfx_scream7.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/sfx_scream7.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 487:
            content = document.createElement('span');
            content.textContent = `Click me! sfx_scream7_old.ogg`;
            content.onclick = function() {document.getElementById('sfx_scream7_old.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'sfx_scream7_old.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/sfx_scream7_old.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 488:
            content = document.createElement('span');
            content.textContent = `Click me! sfx_secretenter.ogg`;
            content.onclick = function() {document.getElementById('sfx_secretenter.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'sfx_secretenter.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/sfx_secretenter.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 489:
            content = document.createElement('span');
            content.textContent = `Click me! sfx_secretexit.ogg`;
            content.onclick = function() {document.getElementById('sfx_secretexit.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'sfx_secretexit.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/sfx_secretexit.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 490:
            content = document.createElement('span');
            content.textContent = `Click me! sfx_secretfound.ogg`;
            content.onclick = function() {document.getElementById('sfx_secretfound.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'sfx_secretfound.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/sfx_secretfound.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 491:
            content = document.createElement('span');
            content.textContent = `Click me! sfx_secretfound_old.ogg`;
            content.onclick = function() {document.getElementById('sfx_secretfound_old.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'sfx_secretfound_old.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/sfx_secretfound_old.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 492:
            content = document.createElement('span');
            content.textContent = `Click me! sfx_shotgungot.ogg`;
            content.onclick = function() {document.getElementById('sfx_shotgungot.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'sfx_shotgungot.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/sfx_shotgungot.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 493:
            content = document.createElement('span');
            content.textContent = `Click me! sfx_step.ogg`;
            content.onclick = function() {document.getElementById('sfx_step.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'sfx_step.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/sfx_step.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 494:
            content = document.createElement('span');
            content.textContent = `Click me! sfx_stompenemy.ogg`;
            content.onclick = function() {document.getElementById('sfx_stompenemy.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'sfx_stompenemy.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/sfx_stompenemy.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 495:
            content = document.createElement('span');
            content.textContent = `Click me! sfx_superjumphold.ogg`;
            content.onclick = function() {document.getElementById('sfx_superjumphold.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'sfx_superjumphold.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/sfx_superjumphold.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 496:
            content = document.createElement('span');
            content.textContent = `Click me! sfx_superjumphold_old.ogg`;
            content.onclick = function() {document.getElementById('sfx_superjumphold_old.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'sfx_superjumphold_old.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/sfx_superjumphold_old.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 497:
            content = document.createElement('span');
            content.textContent = `Click me! sfx_superjumpprep.ogg`;
            content.onclick = function() {document.getElementById('sfx_superjumpprep.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'sfx_superjumpprep.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/sfx_superjumpprep.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 498:
            content = document.createElement('span');
            content.textContent = `Click me! sfx_superjumpprep_old.ogg`;
            content.onclick = function() {document.getElementById('sfx_superjumpprep_old.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'sfx_superjumpprep_old.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/sfx_superjumpprep_old.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 499:
            content = document.createElement('span');
            content.textContent = `Click me! sfx_superjumprelease.ogg`;
            content.onclick = function() {document.getElementById('sfx_superjumprelease.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'sfx_superjumprelease.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/sfx_superjumprelease.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 500:
            content = document.createElement('span');
            content.textContent = `Click me! sfx_superjumprelease_old.ogg`;
            content.onclick = function() {document.getElementById('sfx_superjumprelease_old.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'sfx_superjumprelease_old.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/sfx_superjumprelease_old.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 501:
            content = document.createElement('span');
            content.textContent = `Click me! sfx_suplexdash.ogg`;
            content.onclick = function() {document.getElementById('sfx_suplexdash.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'sfx_suplexdash.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/sfx_suplexdash.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 502:
            content = document.createElement('span');
            content.textContent = `Click me! sfx_taunt.ogg`;
            content.onclick = function() {document.getElementById('sfx_taunt.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'sfx_taunt.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/sfx_taunt.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 503:
            content = document.createElement('span');
            content.textContent = `Click me! sfx_taxi1.ogg`;
            content.onclick = function() {document.getElementById('sfx_taxi1.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'sfx_taxi1.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/sfx_taxi1.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 504:
            content = document.createElement('span');
            content.textContent = `Click me! sfx_taxi1_old.ogg`;
            content.onclick = function() {document.getElementById('sfx_taxi1_old.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'sfx_taxi1_old.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/sfx_taxi1_old.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 505:
            content = document.createElement('span');
            content.textContent = `Click me! sfx_taxi2.ogg`;
            content.onclick = function() {document.getElementById('sfx_taxi2.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'sfx_taxi2.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/sfx_taxi2.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 506:
            content = document.createElement('span');
            content.textContent = `Click me! sfx_taxi2_old.ogg`;
            content.onclick = function() {document.getElementById('sfx_taxi2_old.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'sfx_taxi2_old.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/sfx_taxi2_old.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 507:
            content = document.createElement('span');
            content.textContent = `Click me! sfx_thundercloud.ogg`;
            content.onclick = function() {document.getElementById('sfx_thundercloud.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'sfx_thundercloud.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/sfx_thundercloud.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 508:
            content = document.createElement('span');
            content.textContent = `Click me! sfx_timerbegin.ogg`;
            content.onclick = function() {document.getElementById('sfx_timerbegin.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'sfx_timerbegin.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/sfx_timerbegin.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 509:
            content = document.createElement('span');
            content.textContent = `Click me! sfx_timercount.ogg`;
            content.onclick = function() {document.getElementById('sfx_timercount.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'sfx_timercount.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/sfx_timercount.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 510:
            content = document.createElement('span');
            content.textContent = `Click me! sfx_timerend.ogg`;
            content.onclick = function() {document.getElementById('sfx_timerend.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'sfx_timerend.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/sfx_timerend.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 511:
            content = document.createElement('span');
            content.textContent = `Click me! sfx_tumble1.ogg`;
            content.onclick = function() {document.getElementById('sfx_tumble1.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'sfx_tumble1.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/sfx_tumble1.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 512:
            content = document.createElement('span');
            content.textContent = `Click me! sfx_tumble2.ogg`;
            content.onclick = function() {document.getElementById('sfx_tumble2.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'sfx_tumble2.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/sfx_tumble2.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 513:
            content = document.createElement('span');
            content.textContent = `Click me! sfx_tumble3.ogg`;
            content.onclick = function() {document.getElementById('sfx_tumble3.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'sfx_tumble3.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/sfx_tumble3.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 514:
            content = document.createElement('span');
            content.textContent = `Click me! sfx_tumble4.ogg`;
            content.onclick = function() {document.getElementById('sfx_tumble4.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'sfx_tumble4.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/sfx_tumble4.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 515:
            content = document.createElement('span');
            content.textContent = `Click me! sfx_ventilator.ogg`;
            content.onclick = function() {document.getElementById('sfx_ventilator.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'sfx_ventilator.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/sfx_ventilator.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 516:
            content = document.createElement('span');
            content.textContent = `Click me! sfx_weenieride.ogg`;
            content.onclick = function() {document.getElementById('sfx_weenieride.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'sfx_weenieride.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/sfx_weenieride.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 517:
            content = document.createElement('span');
            content.textContent = `Click me! shotgunload.ogg`;
            content.onclick = function() {document.getElementById('shotgunload.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'shotgunload.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/shotgunload.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 518:
            content = document.createElement('span');
            content.textContent = `Click me! shotgunshot.ogg`;
            content.onclick = function() {document.getElementById('shotgunshot.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'shotgunshot.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/shotgunshot.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 519:
            content = document.createElement('span');
            content.textContent = `Click me! sjump.ogg`;
            content.onclick = function() {document.getElementById('sjump.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'sjump.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/sjump.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 520:
            content = document.createElement('span');
            content.textContent = `Click me! skateboardjump.ogg`;
            content.onclick = function() {document.getElementById('skateboardjump.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'skateboardjump.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/skateboardjump.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 521:
            content = document.createElement('span');
            content.textContent = `Click me! skateboardland.ogg`;
            content.onclick = function() {document.getElementById('skateboardland.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'skateboardland.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/skateboardland.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 522:
            content = document.createElement('span');
            content.textContent = `Click me! slipnslide1.ogg`;
            content.onclick = function() {document.getElementById('slipnslide1.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'slipnslide1.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/slipnslide1.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 523:
            content = document.createElement('span');
            content.textContent = `Click me! slipnslide2.ogg`;
            content.onclick = function() {document.getElementById('slipnslide2.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'slipnslide2.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/slipnslide2.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 524:
            content = document.createElement('span');
            content.textContent = `Click me! slipnslide3.ogg`;
            content.onclick = function() {document.getElementById('slipnslide3.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'slipnslide3.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/slipnslide3.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 525:
            content = document.createElement('span');
            content.textContent = `Click me! slipnslide4.ogg`;
            content.onclick = function() {document.getElementById('slipnslide4.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'slipnslide4.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/slipnslide4.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 526:
            content = document.createElement('span');
            content.textContent = `Click me! slipnslide5.ogg`;
            content.onclick = function() {document.getElementById('slipnslide5.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'slipnslide5.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/slipnslide5.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 527:
            content = document.createElement('span');
            content.textContent = `Click me! slipnslide6.ogg`;
            content.onclick = function() {document.getElementById('slipnslide6.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'slipnslide6.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/slipnslide6.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 528:
            content = document.createElement('span');
            content.textContent = `Click me! slipnslide7.ogg`;
            content.onclick = function() {document.getElementById('slipnslide7.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'slipnslide7.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/slipnslide7.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 529:
            content = document.createElement('span');
            content.textContent = `Click me! slipnslide8.ogg`;
            content.onclick = function() {document.getElementById('slipnslide8.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'slipnslide8.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/slipnslide8.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 530:
            content = document.createElement('span');
            content.textContent = `Click me! slipnslideend.ogg`;
            content.onclick = function() {document.getElementById('slipnslideend.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'slipnslideend.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/slipnslideend.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 531:
            content = document.createElement('span');
            content.textContent = `Click me! slipnslideend2.ogg`;
            content.onclick = function() {document.getElementById('slipnslideend2.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'slipnslideend2.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/slipnslideend2.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 532:
            content = document.createElement('span');
            content.textContent = `Click me! slipnslideend3.ogg`;
            content.onclick = function() {document.getElementById('slipnslideend3.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'slipnslideend3.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/slipnslideend3.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 533:
            content = document.createElement('span');
            content.textContent = `Click me! sniff2.ogg`;
            content.onclick = function() {document.getElementById('sniff2.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'sniff2.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/sniff2.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 534:
            content = document.createElement('span');
            content.textContent = `Click me! spaceship.ogg`;
            content.onclick = function() {document.getElementById('spaceship.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'spaceship.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/spaceship.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 535:
            content = document.createElement('span');
            content.textContent = `Click me! superjumpcancel.ogg`;
            content.onclick = function() {document.getElementById('superjumpcancel.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'superjumpcancel.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/superjumpcancel.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 536:
            content = document.createElement('span');
            content.textContent = `Click me! supernoise.ogg`;
            content.onclick = function() {document.getElementById('supernoise.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'supernoise.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/supernoise.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 537:
            content = document.createElement('span');
            content.textContent = `Click me! supernoiseeffect.ogg`;
            content.onclick = function() {document.getElementById('supernoiseeffect.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'supernoiseeffect.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/supernoiseeffect.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 538:
            content = document.createElement('span');
            content.textContent = `Click me! supertauntnotif.ogg`;
            content.onclick = function() {document.getElementById('supertauntnotif.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'supertauntnotif.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/supertauntnotif.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 539:
            content = document.createElement('span');
            content.textContent = `Click me! switch1.ogg`;
            content.onclick = function() {document.getElementById('switch1.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'switch1.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/switch1.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 540:
            content = document.createElement('span');
            content.textContent = `Click me! switch2.ogg`;
            content.onclick = function() {document.getElementById('switch2.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'switch2.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/switch2.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 541:
            content = document.createElement('span');
            content.textContent = `Click me! switchchar1.ogg`;
            content.onclick = function() {document.getElementById('switchchar1.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'switchchar1.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/switchchar1.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 542:
            content = document.createElement('span');
            content.textContent = `Click me! switchchar2.ogg`;
            content.onclick = function() {document.getElementById('switchchar2.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'switchchar2.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/switchchar2.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 543:
            content = document.createElement('span');
            content.textContent = `Click me! teleporter1.ogg`;
            content.onclick = function() {document.getElementById('teleporter1.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'teleporter1.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/teleporter1.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 544:
            content = document.createElement('span');
            content.textContent = `Click me! teleporter2.ogg`;
            content.onclick = function() {document.getElementById('teleporter2.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'teleporter2.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/teleporter2.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 545:
            content = document.createElement('span');
            content.textContent = `Click me! thundercloud2.ogg`;
            content.onclick = function() {document.getElementById('thundercloud2.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'thundercloud2.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/thundercloud2.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 546:
            content = document.createElement('span');
            content.textContent = `Click me! titlecard1.ogg`;
            content.onclick = function() {document.getElementById('titlecard1.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'titlecard1.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/titlecard1.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 547:
            content = document.createElement('span');
            content.textContent = `Click me! titlecard2.ogg`;
            content.onclick = function() {document.getElementById('titlecard2.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'titlecard2.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/titlecard2.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 548:
            content = document.createElement('span');
            content.textContent = `Click me! titlecard3.ogg`;
            content.onclick = function() {document.getElementById('titlecard3.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'titlecard3.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/titlecard3.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 549:
            content = document.createElement('span');
            content.textContent = `Click me! toppinhelp.ogg`;
            content.onclick = function() {document.getElementById('toppinhelp.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'toppinhelp.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/toppinhelp.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 550:
            content = document.createElement('span');
            content.textContent = `Click me! tornado.ogg`;
            content.onclick = function() {document.getElementById('tornado.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'tornado.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/tornado.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 551:
            content = document.createElement('span');
            content.textContent = `Click me! trashjump1.ogg`;
            content.onclick = function() {document.getElementById('trashjump1.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'trashjump1.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/trashjump1.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 552:
            content = document.createElement('span');
            content.textContent = `Click me! trashjump2.ogg`;
            content.onclick = function() {document.getElementById('trashjump2.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'trashjump2.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/trashjump2.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 553:
            content = document.createElement('span');
            content.textContent = `Click me! ufolivelaser.ogg`;
            content.onclick = function() {document.getElementById('ufolivelaser.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'ufolivelaser.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/ufolivelaser.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 554:
            content = document.createElement('span');
            content.textContent = `Click me! uppercut.ogg`;
            content.onclick = function() {document.getElementById('uppercut.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'uppercut.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/uppercut.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 555:
            content = document.createElement('span');
            content.textContent = `Click me! uppercut2.ogg`;
            content.onclick = function() {document.getElementById('uppercut2.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'uppercut2.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/uppercut2.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 556:
            content = document.createElement('span');
            content.textContent = `Click me! vigi1.ogg`;
            content.onclick = function() {document.getElementById('vigi1.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'vigi1.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/vigi1.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 557:
            content = document.createElement('span');
            content.textContent = `Click me! vigi2.ogg`;
            content.onclick = function() {document.getElementById('vigi2.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'vigi2.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/vigi2.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 558:
            content = document.createElement('span');
            content.textContent = `Click me! vigi3.ogg`;
            content.onclick = function() {document.getElementById('vigi3.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'vigi3.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/vigi3.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 559:
            content = document.createElement('span');
            content.textContent = `Click me! vigicowstomp.ogg`;
            content.onclick = function() {document.getElementById('vigicowstomp.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'vigicowstomp.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/vigicowstomp.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 560:
            content = document.createElement('span');
            content.textContent = `Click me! vigiflame.ogg`;
            content.onclick = function() {document.getElementById('vigiflame.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'vigiflame.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/vigiflame.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 561:
            content = document.createElement('span');
            content.textContent = `Click me! vigiflamestart.ogg`;
            content.onclick = function() {document.getElementById('vigiflamestart.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'vigiflamestart.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/vigiflamestart.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 562:
            content = document.createElement('span');
            content.textContent = `Click me! vigiorder.ogg`;
            content.onclick = function() {document.getElementById('vigiorder.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'vigiorder.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/vigiorder.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 563:
            content = document.createElement('span');
            content.textContent = `Click me! vigislide.ogg`;
            content.onclick = function() {document.getElementById('vigislide.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'vigislide.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/vigislide.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 564:
            content = document.createElement('span');
            content.textContent = `Click me! vigistep.ogg`;
            content.onclick = function() {document.getElementById('vigistep.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'vigistep.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/vigistep.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 565:
            content = document.createElement('span');
            content.textContent = `Click me! vigithrow.ogg`;
            content.onclick = function() {document.getElementById('vigithrow.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'vigithrow.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/vigithrow.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 566:
            content = document.createElement('span');
            content.textContent = `Click me! vigiuzijump.ogg`;
            content.onclick = function() {document.getElementById('vigiuzijump.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'vigiuzijump.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/vigiuzijump.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 567:
            content = document.createElement('span');
            content.textContent = `Click me! waterslide.ogg`;
            content.onclick = function() {document.getElementById('waterslide.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'waterslide.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/waterslide.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 568:
            content = document.createElement('span');
            content.textContent = `Click me! waterslidesplash.ogg`;
            content.onclick = function() {document.getElementById('waterslidesplash.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'waterslidesplash.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/waterslidesplash.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 569:
            content = document.createElement('span');
            content.textContent = `Click me! waterslidesplash2.ogg`;
            content.onclick = function() {document.getElementById('waterslidesplash2.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'waterslidesplash2.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/waterslidesplash2.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 570:
            content = document.createElement('span');
            content.textContent = `Click me! waterslidesplash3.ogg`;
            content.onclick = function() {document.getElementById('waterslidesplash3.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'waterslidesplash3.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/waterslidesplash3.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 571:
            content = document.createElement('span');
            content.textContent = `Click me! watesplash.ogg`;
            content.onclick = function() {document.getElementById('watesplash.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'watesplash.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/watesplash.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        
        case 572:
            content = document.createElement('span');
            content.textContent = `Click me! windloop.ogg`;
            content.onclick = function() {document.getElementById('windloop.ogg').play()};
            audio = document.createElement('audio');
            audio.id = 'windloop.ogg';
            audio.hidden = true;
            src = document.createElement('source');
            src.src = '/static/audio/pizzatower/windloop.ogg';
            src.type = 'audio/ogg';
            audio.appendChild(src);
            content.appendChild(audio);
            return content;
        default:
            content = document.createElement('span');
            content.textContent = 'you got this far? Nice. Email me proof!';
            return content;
    }
}

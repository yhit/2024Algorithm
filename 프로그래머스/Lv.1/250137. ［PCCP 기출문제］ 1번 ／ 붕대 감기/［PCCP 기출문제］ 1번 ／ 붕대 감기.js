function solution(bandage, health, attacks) {
    const skillTime = bandage[0];
    const passiveHeal = bandage[1];
    const bonusHeal = bandage[2];
    const maxHealth = health;
    
    let currentHealth = health;
    let currentTime = 0;
    
    for(let i = 0; i < attacks.length; i++){
        let attackTime = attacks[i][0];
        let damage = attacks[i][1];
        let count = 0;
        while(true){
            currentTime++;
            if(currentTime === attackTime){
                currentHealth = Math.min(maxHealth, currentHealth);
                break;
            }
            count++;
            currentHealth += passiveHeal;
            if(count % skillTime === 0){
                currentHealth += bonusHeal;
            }
        }
        
        currentHealth -= damage;
        if(currentHealth <= 0){
            return -1;
        }
    }
    
    return currentHealth;
}

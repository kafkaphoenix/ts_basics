// filter function
// for each function
// map function

interface SeaCreature {
    emoji: string;
    deadly: boolean;
    type: string 
}

const ocean: SeaCreature[] = [
    { emoji: '🦐', deadly: true, type: 'crustacean' },
    { emoji: '🐡', deadly: false, type: 'fish' },
    { emoji: '🐠', deadly: false, type: 'fish' },
    { emoji: '🦈', deadly: false, type: 'shark' },
    { emoji: '🦀', deadly: false, type: 'crustacean' },
];

const emojis: string[] = ocean.map(creature => creature.emoji);
console.log(emojis); // Outputs: ['🦐', '🐡', '🐠', '🦈', '🦀']

emojis.forEach(emoji => console.log(emoji)); // Outputs: 🦐 🐡 🐠 🦈 🦀

const deadlyCreatures: SeaCreature[] = ocean.filter(creature => creature.deadly);
console.log(deadlyCreatures); // Outputs: [{ emoji: '🦐', deadly: true, type: 'crustacean' }]
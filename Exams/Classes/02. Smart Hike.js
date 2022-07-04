class SmartHike {

	username;
    goals;
    listOfHikes;
	resources;

    constructor(username) {
        this.username = username;
        this.goals = {};
        this.listOfHikes = [];
        this.resources = 100;
    }

    addGoal(peak, altitude) {
        let goal = {peak: altitude};
        if (this.goals.hasOwnProperty(peak)) {
            return `${peak} has already been added to your goals`;
        }
        this.goals[peak] = Number(altitude);
        return `You have successfully added a new goal - ${peak}`;
    }

    hike(peak, time, difficultyLevel) {

        time = Number(time);
        let used = time * 10;
        if (!this.goals.hasOwnProperty(peak))throw new Error(`${peak} is not in your current goals`);
        if (this.resources <= 0) throw new Error("You don't have enough resources to start the hike");
        let check = 0;

        if(this.resources>time) check = this.resources-time;
        else check = time - this.resources;

        if (this.resources - used < 0) {
            return "You don't have enough resources to complete the hike";
        }
        this.resources -= used;
        this.listOfHikes.push({peak, time, difficultyLevel});
        return `You hiked ${peak} peak for ${time} hours and you have ${this.resources}% resources left`;
    }

    rest(time) {
        time = Number(time);

        this.resources += time * 10;
        if (this.resources >= 100){
            this.resources = 100
            return `Your resources are fully recharged. Time for hiking!`;
        }
        return `You have rested for ${time} hours and gained ${time * 10}% resources`;
    }

    showRecord(criteria) {
        if (this.listOfHikes.length === 0) {
            return `${this.username} has not done any hiking yet`
        }

        let result = this.listOfHikes.filter(hike => hike.difficultyLevel === criteria);
        if (result.length === 0){
            return `${this.username} has not done any ${criteria} hiking yet`;
        }
        return `${this.username}'s best ${criteria} hike is ${this.hike()} peak, for ${result['time']} hours`;
    }
}

const user = new SmartHike('Vili');
console.log(user.addGoal('Musala', 2925));
console.log(user.addGoal('Musala', 2925));
console.log(user.addGoal('Rui', 1706));
console.log(user.hike('Musala', 8, 'hard'));
console.log(user.hike('Rui', 3, 'easy'));
console.log(user.hike('Everest', 12, 'hard'));


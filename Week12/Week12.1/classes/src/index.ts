// Decorators
import {once,measure} from "helpful-decorators";


// Classes 
class DateClass {
    private timeZone : string;
    constructor(timeZone:string) {
        this.timeZone = timeZone;
    }
    getItem() {
        return 1;
    }
    @measure //decorator
    getTime(){
        var d = new Date();
        return d.getTime();
    }

    getMonth(){
        var d = new Date();
        return d.getMonth();
    }

    getTimeZone(){
        return this.timeZone;
    }

    epensiveOperation() {
        let ctr= 0 ;
        const startTime = new Date().getTime();
        for (let i=0;i<11000000;i++){
            ctr++;
        }
        
        const currentTime = new Date().getTime();
        console.log(currentTime-startTime);
        
    }
}
// We cannot do DateClass.gtitem // because it is not a static thing it is a class same as in java c++
const dateObject = new DateClass("IND");
const response = dateObject.getMonth();
const responseTime = dateObject.getTime();
const responseTimeZone = dateObject.getTimeZone();
console.log(response);
console.log(responseTime);
console.log(responseTimeZone);
console.log(dateObject.epensiveOperation());


// Client in openApi Sec 
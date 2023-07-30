const mysql = require('mysql');

class HorceNumberChange {
    constructor() {
        this.horceNumbers = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18'];
    
    }

    changeToFlag(queryArgument, selectHorceNumber) {
        let index = 0;

        for (horceNumber in this.horceNumbers) {
            if (selectHorceNumber[index] && selectHorceNumber[index] == horceNumber) {
                queryArgument.push('1');
                index++;
            } else {
                queryArgument.push('0');
            }
            
        }
        return queryArgument;
    }

    changeToHorceNumber(horceFlags) {
        let selectHorceNumbers = [];

        for (let index = 0; index < horceFlags.length; index++) {
            if (horceFlags[index] == '1') {
                selectHorceNumbers.push(this.horceNumbers[index]);
            }
        }
        return selectHorceNumbers;
    }

}

module.exports = HorceNumberChange;

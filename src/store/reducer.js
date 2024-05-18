import { initialState } from "./initialState";

export const reducer = (state, action) => {
    switch(action.type) {
        case 'getTargetNumber': {
            const newTargetNumber = () => {
                let targetNumber = [];
                while(targetNumber.length < 4) {
                    let onePartNumber = Math.floor(Math.random() * 10);
                    if (targetNumber.includes(onePartNumber) || (targetNumber.length === 0 && onePartNumber === 0)) {
                        continue;
                    } else {
                        targetNumber = [...targetNumber, onePartNumber];
                    }                    
                }
                return targetNumber;
            }
            state = {...state, targetNumber: newTargetNumber()};
            break;
        }

        case 'changeOnePartNumber': {
            state = {...state, currentNumber: action.payload};
            break;
        }

        case 'setResult': {
            state = {...state, bulls: action.payload.bulls, cows: action.payload.cows};
            break;
        }

        case 'playAgain': {
            state = {...initialState};
            break;
        }

        case 'setIsOpenDescription': {
            state = {...state, isOpenDescription: !state.isOpenDescription};
            break;
        }

        case 'typeResult': {
            state = {...state, result: !state.result};
            break;
        }

        default:
            state = {...state};
    }
    return state;
}
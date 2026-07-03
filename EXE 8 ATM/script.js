let amount = 0;
let pin = 1234;

let input = prompt(`Enter your ATM pin`);
let input1 = parseInt(input);

if (input1 === pin) {

    while (true) {

        let val = prompt("(1 for DEPOSITE)   (2 for WITHDRAWL)   (3 for BALANCE)   (4 for EXIT)");
        let val2 = parseInt(val);

        if (val2 === 1) {
            let amo = prompt(`Enter an amount `);
            let chamo = parseInt(amo);
            amount = amount + chamo;
        } else if (val2 === 2) {
            let wit = prompt(`Enter an amount `);
            let chwit = parseInt(wit);
            if(chwit > amount){
                alert("INSUFFISENT BALANCE ");
                continue;
            }
            amount = amount - chwit;
        } else if (val2 === 3) {
            alert(`Balance ${amount}`);
        } else if (val2 === 4) {
            break;
        } else {
            alert(`Please select an correct option`);
        }
    }
} else {
    alert(`You've entered an wrong pin `);
    alert(`To try again refresh the page`);
}
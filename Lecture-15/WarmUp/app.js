// Input => radii:[1,2,3,4,5]
// Expected Output : [3.141592653589793, 12.566370614359172, 28.274333882308138, 50.26548245743669, 78.53981633974483]

function calculateAreas(radii) {
    const areas = [];
    for (const radius of radii) {
        areas.push(Math.PI * radius * radius);
    }
    return areas;
}

console.log(calculateAreas([1, 2, 3, 4, 5]));

// FlipCasing in a string
// Input :  "HelLO"
// Output : "hELlo"


function flipCasing(str) {
    let res = "";
    for (let i = 0; i < str.length;i++) {
        if (str[i].toLowerCase() === str[i]) {
            res += str[i].toUpperCase();
        } else {
            res += str[i].toLowerCase();
        }
    }
    return res;
}

console.log(flipCasing("HelLO"))

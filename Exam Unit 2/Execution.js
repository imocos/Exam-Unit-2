//Functions

//Function that gives back the square of a number

function square(number) {
    return number * number;
}

console.log(square(2));
console.log(square(16));

//function that returns amount in mm assuming that it was given in inches (1 inch = 25.4 mm)

function convertInchToMili(number) {
    return number * 25.4;
}

console.log(convertInchToMili(10));

//function that returns root of a number

function root(number) {
    return Math.sqrt(number);
}

console.log(root(25));
console.log(root(625));

//function that returns the cube of a number

function cube(number) {
    return number * number * number;
}

console.log(cube(2));
console.log(cube(10));

//function that returns area of a circle given the radius

function areaCircleFromRadius(number) {
    return number * number * Math.PI;
}

console.log(areaCircleFromRadius(10));

//function that returns a greeting given the name

let name = "Michael";

function greet(name) {
    return "Greetings, " + name + "!";
}

console.log(greet(name));

//there might be a better way to do this

//function to flatten an array of integers


const complexArray = [
    6410,
    2831,
    5049,
    7554,
    [
      8707,
      6940,
      9517,
      7565,
      7522,
      9242,
      7972,
      7064,
      3441,
      [
        9960,
        4966,
        9368,
        1634,
        5150,
        3709,
        6660,
        [
          7155, 8056, 7834,
          2639, 6601, 8063,
          2390, 2544, 7022
        ]
      ],
      2385,
      573,
      656,
      733,
      1620,
      3626,
      [
        6274,
        1935,
        [ 6481, 928, 8291, 3196, 3431, 6058 ],
        8010,
        5052,
        892,
        3490,
        2369,
        951,
        1606,
        6763,
        7260,
        6122
      ]
    ],
    5655,
    4223
  ];

function flattenArray(arr) {
    return arr.flat(Infinity);

}

console.log(flattenArray(complexArray));

//function for nodes

const node = {
    "value": 281,
    "left": null,
    "right": {
        "value": 168,
        "left": {
            "value": 732,
            "left": {
                "value": 653,
                "left": {
                    "value": 372,
                    "left": null,
                    "right": {
                        "value": 879,
                        "left": null,
                        "right": {
                            "value": 330,
                            "left": {
                                "value": 752,
                                "left": null,
                                "right": {
                                    "value": 328,
                                    "left": null,
                                    "right": {
                                        "value": 278,
                                        "left": null,
                                        "right": {
                                            "value": 983,
                                            "left": {
                                                "value": 924,
                                                "left": {
                                                    "value": 269,
                                                    "left": {
                                                        "value": 558,
                                                        "left": {
                                                            "value": 571,
                                                            "left": null,
                                                            "right": {
                                                                "value": 241,
                                                                "left": null,
                                                                "right": null
                                                            }
                                                        },
                                                        "right": null
                                                    },
                                                    "right": null
                                                },
                                                "right": null
                                            },
                                            "right": {
                                                "value": 912,
                                                "left": null,
                                                "right": {
                                                    "value": 438,
                                                    "left": {
                                                        "value": 977,
                                                        "left": null,
                                                        "right": {
                                                            "value": 119,
                                                            "left": null,
                                                            "right": {
                                                                "value": 410,
                                                                "left": null,
                                                                "right": {
                                                                    "value": 97,
                                                                    "left": null,
                                                                    "right": {
                                                                        "value": 906,
                                                                        "left": null,
                                                                        "right": null
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    },
                                                    "right": {
                                                        "value": 971,
                                                        "left": null,
                                                        "right": {
                                                            "value": 441,
                                                            "left": null,
                                                            "right": null
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            },
                            "right": null
                        }
                    }
                },
                "right": null
            },
            "right": {
                "value": 364,
                "left": {
                    "value": 131,
                    "left": null,
                    "right": {
                        "value": 125,
                        "left": null,
                        "right": {
                            "value": 895,
                            "left": {
                                "value": 910,
                                "left": null,
                                "right": {
                                    "value": 838,
                                    "left": {
                                        "value": 12,
                                        "left": null,
                                        "right": {
                                            "value": 703,
                                            "left": {
                                                "value": 809,
                                                "left": null,
                                                "right": null
                                            },
                                            "right": null
                                        }
                                    },
                                    "right": null
                                }
                            },
                            "right": {
                                "value": 86,
                                "left": null,
                                "right": {
                                    "value": 429,
                                    "left": null,
                                    "right": {
                                        "value": 547,
                                        "left": null,
                                        "right": {
                                            "value": 545,
                                            "left": null,
                                            "right": {
                                                "value": 267,
                                                "left": {
                                                    "value": 652,
                                                    "left": null,
                                                    "right": null
                                                },
                                                "right": null
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                "right": null
            }
        },
        "right": null
    }
};

function sumNodes(node) {
    if (node === null) return 0;
    return node.value + sumNodes(node.left) + sumNodes(node.right);
}

console.log(sumNodes(node));
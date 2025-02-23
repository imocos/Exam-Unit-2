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

const nodeOne = {
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

const nodeTwo = {
    value: 67, // Level 1
    left: { value: 765, left: null, right: null }, // Level 2
    right: {
      value: 167, // Level 2
      left: {
        value: 564, // Level 3
        left: null,
        right: { value: 379, left: null, right: null } // Level 4
      },
      right: null
    }
  };

function sumNodes(node) {
    if (node === null) return 0;
    return node.value + sumNodes(node.left) + sumNodes(node.right);
}

console.log(sumNodes(nodeOne));
console.log(sumNodes(nodeTwo));

//Calculate max depth of the node tree

function depth(node) {
if (node === null) return 0;
return 1 + Math.max(depth(node.left), depth(node.right));
}

console.log(depth(nodeOne));
console.log(depth(nodeTwo));

//number of nodes

function numberNodes(node) {
    if (node === null) return 0;
    return 1 + numberNodes(node.left) + numberNodes(node.right);
}

console.log(numberNodes(nodeOne));
console.log(numberNodes(nodeTwo));

//books functions

const books = [
    {
        "title": "Meditations: A New Translation",
        "publication_year": 2002,
        "author": "Marcus Aurelius (Translated by Gregory Hays)",
        "isbn": "978-0812968255"
    },
    {
        "title": "Snuff",
        "publication_year": 2011,
        "author": "Terry Pratchett",
        "isbn": "0-385-61823-5"
    },
    {
        "title": "The Collapsing Empire",
        "publication_year": 2017,
        "author": "John Scalzi",
        "isbn": "978-0765388889"
    },
    {
        "title": "The Colour of Magic",
        "publication_year": 1983,
        "author": "Terry Pratchett",
        "isbn": "0-86140-324-X"
    },
    {
        "title": "The Art of War: A New Translation",
        "publication_year": 2018,
        "author": "Sun Tzu (Translated by Michael Nylan)",
        "isbn": "978-0393355524"
    },
    {
        "title": "Thief of Time",
        "publication_year": 2001,
        "author": "Terry Pratchett",
        "isbn": "0-385-60224-3"
    },
    {
        "title": "Reaper Man",
        "publication_year": 1991,
        "author": "Terry Pratchett",
        "isbn": "0-575-04979-4"
    },
    {
        "title": "The Last Emperox",
        "publication_year": 2020,
        "author": "John Scalzi",
        "isbn": "978-0765389176"
    },
    {
        "title": "Hogfather",
        "publication_year": 1996,
        "author": "Terry Pratchett",
        "isbn": "0-575-06403-X"
    },
    {
        "title": "The Ocean at the End of the Lane",
        "publication_year": 2013,
        "author": "Neil Gaiman",
        "isbn": "0-06-225565-7"
    },
    {
        "title": "A Hat Full of Sky",
        "publication_year": 2004,
        "author": "Terry Pratchett",
        "isbn": "0-385-60736-8"
    },
    {
        "title": "Fortunately, the Milk",
        "publication_year": 2013,
        "author": "Neil Gaiman",
        "isbn": "0-06-222407-7"
    },
    {
        "title": "Aloha from Hell",
        "publication_year": 2011,
        "author": "Richard Kadrey",
        "isbn": "978-0061714320"
    },
    {
        "title": "Anansi Boys",
        "publication_year": 2005,
        "author": "Neil Gaiman",
        "isbn": "0-06-051518-X"
    },
    {
        "title": "Walden",
        "publication_year": 1854,
        "author": "Henry David Thoreau",
        "isbn": "978-0140390445"
    },
    {
        "title": "Wyrd Sisters",
        "publication_year": 1988,
        "author": "Terry Pratchett",
        "isbn": "0-86140-355-X"
    },
    {
        "title": "Monstrous Regiment",
        "publication_year": 2003,
        "author": "Terry Pratchett",
        "isbn": "0-385-60224-3"
    },
    {
        "title": "Kill the Dead",
        "publication_year": 2010,
        "author": "Richard Kadrey",
        "isbn": "978-0061714313"
    },
    {
        "title": "The Ghost Brigades",
        "publication_year": 2006,
        "author": "John Scalzi",
        "isbn": "978-0765354068"
    },
    {
        "title": "The Kill Society",
        "publication_year": 2017,
        "author": "Richard Kadrey",
        "isbn": "978-0062474148"
    },
    {
        "title": "The Getaway God",
        "publication_year": 2014,
        "author": "Richard Kadrey",
        "isbn": "978-0062094612"
    },
    {
        "title": "The View from the Cheap Seats",
        "publication_year": 2016,
        "author": "Neil Gaiman",
        "isbn": "0-06-226226-2"
    },
    {
        "title": "The Bands of Mourning",
        "publication_year": 2016,
        "author": "Brandon Sanderson",
        "isbn": "978-0765378576"
    },
    {
        "title": "Maskerade",
        "publication_year": 1995,
        "author": "Terry Pratchett",
        "isbn": "0-575-06013-9"
    },
    {
        "title": "The Wee Free Men",
        "publication_year": 2003,
        "author": "Terry Pratchett",
        "isbn": "0-385-60532-3"
    },
    {
        "title": "The Rithmatist",
        "publication_year": 2013,
        "author": "Brandon Sanderson",
        "isbn": "978-0765338440"
    },
    {
        "title": "Starsight",
        "publication_year": 2019,
        "author": "Brandon Sanderson",
        "isbn": "978-0399555817"
    },
    {
        "title": "The Graveyard Book",
        "publication_year": 2008,
        "author": "Neil Gaiman",
        "isbn": "0-06-053092-8"
    },
    {
        "title": "Neverwhere",
        "publication_year": 1996,
        "author": "Neil Gaiman",
        "isbn": "0-553-10475-8"
    },
    {
        "title": "Witches Abroad",
        "publication_year": 1991,
        "author": "Terry Pratchett",
        "isbn": "0-575-05129-7"
    },
    {
        "title": "Sourcery",
        "publication_year": 1988,
        "author": "Terry Pratchett",
        "isbn": "0-86140-311-8"
    },
    {
        "title": "Thud!",
        "publication_year": 2005,
        "author": "Terry Pratchett",
        "isbn": "0-385-60867-4"
    },
    {
        "title": "Unseen Academicals",
        "publication_year": 2009,
        "author": "Terry Pratchett",
        "isbn": "0-385-60934-4"
    },
    {
        "title": "The Hero of Ages",
        "publication_year": 2008,
        "author": "Brandon Sanderson",
        "isbn": "978-0765316899"
    },
    {
        "title": "Mistborn: The Final Empire",
        "publication_year": 2006,
        "author": "Brandon Sanderson",
        "isbn": "978-0765311788"
    },
    {
        "title": "Coraline",
        "publication_year": 2002,
        "author": "Neil Gaiman",
        "isbn": "0-380-80734-8"
    },
    {
        "title": "Wintersmith",
        "publication_year": 2006,
        "author": "Terry Pratchett",
        "isbn": "0-385-60970-0"
    },
    {
        "title": "The End of All Things",
        "publication_year": 2015,
        "author": "John Scalzi",
        "isbn": "978-0765376077"
    },
    {
        "title": "Equal Rites",
        "publication_year": 1987,
        "author": "Terry Pratchett",
        "isbn": "0-86140-267-7"
    },
    {
        "title": "Lock In",
        "publication_year": 2014,
        "author": "John Scalzi",
        "isbn": "978-0765375865"
    },
    {
        "title": "Tao Te Ching: A New English Version",
        "publication_year": 1988,
        "author": "Laozi (Translated by Stephen Mitchell)",
        "isbn": "978-0061142666"
    },
    {
        "title": "The Android's Dream",
        "publication_year": 2006,
        "author": "John Scalzi",
        "isbn": "978-0765316974"
    },
    {
        "title": "Carpe Jugulum",
        "publication_year": 1998,
        "author": "Terry Pratchett",
        "isbn": "0-575-06672-5"
    },
    {
        "title": "Interesting Times",
        "publication_year": 1994,
        "author": "Terry Pratchett",
        "isbn": "0-575-05800-3"
    },
    {
        "title": "Agent to the Stars",
        "publication_year": 2005,
        "author": "John Scalzi",
        "isbn": "978-1596060205"
    },
    {
        "title": "Words of Radiance",
        "publication_year": 2014,
        "author": "Brandon Sanderson",
        "isbn": "978-0765326362"
    },
    {
        "title": "Small Gods",
        "publication_year": 1992,
        "author": "Terry Pratchett",
        "isbn": "0-575-05222-6"
    },
    {
        "title": "Firefight",
        "publication_year": 2015,
        "author": "Brandon Sanderson",
        "isbn": "978-0385743587"
    },
    {
        "title": "Norse Mythology",
        "publication_year": 2017,
        "author": "Neil Gaiman",
        "isbn": "0-393-60909-X"
    },
    {
        "title": "The Shepherd's Crown",
        "publication_year": 2015,
        "author": "Terry Pratchett",
        "isbn": "0-857-53286-5"
    },
    {
        "title": "The Book of Disquiet: The Complete Edition",
        "publication_year": 2017,
        "author": "Fernando Pessoa (Translated by Margaret Jull Costa)",
        "isbn": "978-0811226936"
    },
    {
        "title": "Redshirts",
        "publication_year": 2012,
        "author": "John Scalzi",
        "isbn": "978-0765334794"
    },
    {
        "title": "The Prophet",
        "publication_year": 1923,
        "author": "Kahlil Gibran",
        "isbn": "978-0394404288"
    },
    {
        "title": "Ballistic Kiss",
        "publication_year": 2020,
        "author": "Richard Kadrey",
        "isbn": "978-0062672575"
    },
    {
        "title": "Sandman Slim",
        "publication_year": 2009,
        "author": "Richard Kadrey",
        "isbn": "978-0061714306"
    },
    {
        "title": "The Dhammapada: A New Translation of the Buddhist Classic with Annotations",
        "publication_year": 1993,
        "author": "Translated by Gil Fronsdal",
        "isbn": "978-1590303801"
    },
    {
        "title": "Steelheart",
        "publication_year": 2013,
        "author": "Brandon Sanderson",
        "isbn": "978-0385743563"
    },
    {
        "title": "Killing Pretty",
        "publication_year": 2015,
        "author": "Richard Kadrey",
        "isbn": "978-0062373106"
    },
    {
        "title": "InterWorld",
        "publication_year": 2007,
        "author": "Neil Gaiman & Michael Reaves",
        "isbn": "0-06-123896-1"
    },
    {
        "title": "Metrophage",
        "publication_year": 1988,
        "author": "Richard Kadrey",
        "isbn": "0-671-69759-5"
    },
    {
        "title": "Zoe's Tale",
        "publication_year": 2008,
        "author": "John Scalzi",
        "isbn": "978-0765316981"
    },
    {
        "title": "Shadows of Self",
        "publication_year": 2015,
        "author": "Brandon Sanderson",
        "isbn": "978-0765378552"
    },
    {
        "title": "Cytonic",
        "publication_year": 2021,
        "author": "Brandon Sanderson",
        "isbn": "978-0399555855"
    },
    {
        "title": "The Way of Kings",
        "publication_year": 2010,
        "author": "Brandon Sanderson",
        "isbn": "978-0765326355"
    },
    {
        "title": "Night Watch",
        "publication_year": 2002,
        "author": "Terry Pratchett",
        "isbn": "0-385-60265-0"
    },
    {
        "title": "The Last Continent",
        "publication_year": 1998,
        "author": "Terry Pratchett",
        "isbn": "0-575-06540-0"
    },
    {
        "title": "Dead Set",
        "publication_year": 2013,
        "author": "Richard Kadrey",
        "isbn": "978-0062283016"
    },
    {
        "title": "Warbreaker",
        "publication_year": 2009,
        "author": "Brandon Sanderson",
        "isbn": "978-0765320308"
    },
    {
        "title": "Good Omens",
        "publication_year": 1990,
        "author": "Neil Gaiman & Terry Pratchett",
        "isbn": "0-575-04800-3"
    },
    {
        "title": "The Alloy of Law",
        "publication_year": 2011,
        "author": "Brandon Sanderson",
        "isbn": "978-0765330420"
    },
    {
        "title": "The Perdition Score",
        "publication_year": 2016,
        "author": "Richard Kadrey",
        "isbn": "978-0062373267"
    },
    {
        "title": "Jingo",
        "publication_year": 1997,
        "author": "Terry Pratchett",
        "isbn": "0-575-06411-0"
    },
    {
        "title": "The Well of Ascension",
        "publication_year": 2007,
        "author": "Brandon Sanderson",
        "isbn": "978-0765316882"
    },
    {
        "title": "Going Postal",
        "publication_year": 2004,
        "author": "Terry Pratchett",
        "isbn": "0-385-60936-0"
    },
    {
        "title": "The Truth",
        "publication_year": 2000,
        "author": "Terry Pratchett",
        "isbn": "0-385-60102-6"
    },
    {
        "title": "The Human Division",
        "publication_year": 2013,
        "author": "John Scalzi",
        "isbn": "978-0765333513"
    },
    {
        "title": "Mort",
        "publication_year": 1987,
        "author": "Terry Pratchett",
        "isbn": "0-86140-289-8"
    },
    {
        "title": "King Bullet",
        "publication_year": 2021,
        "author": "Richard Kadrey",
        "isbn": "978-0062951571"
    },
    {
        "title": "Butcher Bird",
        "publication_year": 2007,
        "author": "Richard Kadrey",
        "isbn": "978-1597800860"
    },
    {
        "title": "Soul Music",
        "publication_year": 1994,
        "author": "Terry Pratchett",
        "isbn": "0-575-05504-7"
    },
    {
        "title": "Stardust",
        "publication_year": 1999,
        "author": "Neil Gaiman",
        "isbn": "0-380-97728-1"
    },
    {
        "title": "Fragile Things: Short Fictions and Wonders",
        "publication_year": 2006,
        "author": "Neil Gaiman",
        "isbn": "0-06-051522-8"
    },
    {
        "title": "Raising Steam",
        "publication_year": 2013,
        "author": "Terry Pratchett",
        "isbn": "0-857-52227-5"
    },
    {
        "title": "Rumi's Little Book of Life: The Garden of the Soul, the Heart, and the Spirit",
        "publication_year": 2012,
        "author": "Rumi (Translated by Maryam Mafi and Azima Melita Kolin)",
        "isbn": "978-1571746894"
    },
    {
        "title": "Fuzzy Nation",
        "publication_year": 2011,
        "author": "John Scalzi",
        "isbn": "978-0765367038"
    },
    {
        "title": "The Consuming Fire",
        "publication_year": 2018,
        "author": "John Scalzi",
        "isbn": "978-0765388971"
    },
    {
        "title": "The Last Colony",
        "publication_year": 2007,
        "author": "John Scalzi",
        "isbn": "978-0765356185"
    },
    {
        "title": "Old Man's War",
        "publication_year": 2005,
        "author": "John Scalzi",
        "isbn": "978-0765348271"
    },
    {
        "title": "Guards! Guards!",
        "publication_year": 1989,
        "author": "Terry Pratchett",
        "isbn": "0-575-04589-6"
    },
    {
        "title": "Lords and Ladies",
        "publication_year": 1992,
        "author": "Terry Pratchett",
        "isbn": "0-575-05278-1"
    },
    {
        "title": "Eric",
        "publication_year": 1990,
        "author": "Terry Pratchett",
        "isbn": "0-575-04800-3"
    },
    {
        "title": "Feet of Clay",
        "publication_year": 1996,
        "author": "Terry Pratchett",
        "isbn": "0-575-05900-3"
    },
    {
        "title": "Oathbringer",
        "publication_year": 2017,
        "author": "Brandon Sanderson",
        "isbn": "978-0765326379"
    },
    {
        "title": "Head On",
        "publication_year": 2018,
        "author": "John Scalzi",
        "isbn": "978-0765388914"
    },
    {
        "title": "Calamity",
        "publication_year": 2016,
        "author": "Brandon Sanderson",
        "isbn": "978-0385743600"
    },
    {
        "title": "Skyward",
        "publication_year": 2018,
        "author": "Brandon Sanderson",
        "isbn": "978-0399555770"
    },
    {
        "title": "The Fifth Elephant",
        "publication_year": 1999,
        "author": "Terry Pratchett",
        "isbn": "0-575-06769-1"
    },
    {
        "title": "I Shall Wear Midnight",
        "publication_year": 2010,
        "author": "Terry Pratchett",
        "isbn": "0-385-60936-0"
    },
    {
        "title": "Hollywood Dead",
        "publication_year": 2018,
        "author": "Richard Kadrey",
        "isbn": "978-0062474179"
    },
    {
        "title": "Pyramids",
        "publication_year": 1989,
        "author": "Terry Pratchett",
        "isbn": "0-86140-460-2"
    },
    {
        "title": "Rhythm of War",
        "publication_year": 2020,
        "author": "Brandon Sanderson",
        "isbn": "978-0765326386"
    },
    {
        "title": "Trigger Warning: Short Fictions and Disturbances",
        "publication_year": 2015,
        "author": "Neil Gaiman",
        "isbn": "0-06-233026-8"
    },
    {
        "title": "Letters from a Stoic: Epistulae Morales AD Lucilium",
        "publication_year": 1969,
        "author": "Seneca (Translated by Robin Campbell)",
        "isbn": "978-0140442106"
    },
    {
        "title": "Making Money",
        "publication_year": 2007,
        "author": "Terry Pratchett",
        "isbn": "0-385-61100-6"
    },
    {
        "title": "Elantris",
        "publication_year": 2005,
        "author": "Brandon Sanderson",
        "isbn": "978-0765350374"
    },
    {
        "title": "Moving Pictures",
        "publication_year": 1990,
        "author": "Terry Pratchett",
        "isbn": "0-575-04696-5"
    },
    {
        "title": "Men at Arms",
        "publication_year": 1993,
        "author": "Terry Pratchett",
        "isbn": "0-575-05508-X"
    },
    {
        "title": "Odd and the Frost Giants",
        "publication_year": 2008,
        "author": "Neil Gaiman",
        "isbn": "0-06-167173-8"
    },
    {
        "title": "American Gods",
        "publication_year": 2001,
        "author": "Neil Gaiman",
        "isbn": "0-380-97365-0"
    },
    {
        "title": "The Light Fantastic",
        "publication_year": 1986,
        "author": "Terry Pratchett",
        "isbn": "0-86140-203-0"
    },
    {
        "title": "Kill City Blues",
        "publication_year": 2013,
        "author": "Richard Kadrey",
        "isbn": "978-0062094599"
    },
    {
        "title": "The Bhagavad Gita: A New Translation",
        "publication_year": 2002,
        "author": "Stephen Mitchell",
        "isbn": "978-0609810347"
    },
    {
        "title": "Devil Said Bang",
        "publication_year": 2012,
        "author": "Richard Kadrey",
        "isbn": "978-0062094575"
    },
    {
        "title": "The Last Hero",
        "publication_year": 2001,
        "author": "Terry Pratchett",
        "isbn": "0-575-07098-8"
    },
    {
        "title": "The Amazing Maurice and His Educated Rodents",
        "publication_year": 2001,
        "author": "Terry Pratchett",
        "isbn": "0-385-60113-1"
    }
];

//books starting with "The"

function booksThe(books) {
    return books.filter(book => book.title.toLowerCase().startsWith("the "));
}

console.log(booksThe(books));

//books with authors with "t"

function authorT(books) {
    return books.filter(book => 
        book.author.toLowerCase().includes("t") &&
        !book.author.toLowerCase().includes("translated")
    );
}

console.log(authorT(books));

//count books published after 1992

function after1992(books) {
    return books.filter(book => book.publication_year > 1992).length;
}

console.log(after1992(books));

//count books published before 2004

function before2004(books) {
    return books.filter(book => book.publication_year < 2004).length;
}

console.log(before2004(books));

//Return the isbn number of all the books for a given author

function isbnForAuthor(books, authorName) {
    return books
                .filter(book => book.author.toLowerCase() === authorName.toLowerCase())
                .map(book => book.isbn);
}

console.log(isbnForAuthor(books, "Marcus Aurelius"));
// starting data set to populate location storage
// Data collected from OMDB API and stored locally as a JSON object
// CITE: https://www.omdbapi.com/
export const moviesDataset = 
{
    "The Shawshank Redemption": {
        "name": "The Shawshank Redemption",
        "boxOffice": "28767189",
        "budget": "N/A",
        "cast": [
            "Tim Robbins",
            "Morgan Freeman",
            "Bob Gunton"
        ],
        "countries": [
            "United States"
        ],
        "duration": "142",
        "genres": [
            "Drama"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_SX300.jpg",
        "releaseDate": "1994-10-14",
        "synopsis": "Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion.",
        "directors": [
            "Frank Darabont"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "The Godfather": {
        "name": "The Godfather",
        "boxOffice": "136381073",
        "budget": "N/A",
        "cast": [
            "Marlon Brando",
            "Al Pacino",
            "James Caan"
        ],
        "countries": [
            "United States"
        ],
        "duration": "175",
        "genres": [
            "Crime",
            "Drama"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
        "releaseDate": "1972-03-24",
        "synopsis": "The aging patriarch of an organized crime dynasty in postwar New York City transfers control of his clandestine empire to his reluctant youngest son.",
        "directors": [
            "Francis Ford Coppola"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "The Dark Knight": {
        "name": "The Dark Knight",
        "boxOffice": "534987076",
        "budget": "N/A",
        "cast": [
            "Christian Bale",
            "Heath Ledger",
            "Aaron Eckhart"
        ],
        "countries": [
            "United States",
            "United Kingdom"
        ],
        "duration": "152",
        "genres": [
            "Action",
            "Crime",
            "Drama"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
        "releaseDate": "2008-07-18",
        "synopsis": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
        "directors": [
            "Christopher Nolan"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "The Godfather Part II": {
        "name": "The Godfather Part II",
        "boxOffice": "47834595",
        "budget": "N/A",
        "cast": [
            "Al Pacino",
            "Robert De Niro",
            "Robert Duvall"
        ],
        "countries": [
            "United States"
        ],
        "duration": "202",
        "genres": [
            "Crime",
            "Drama"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
        "releaseDate": "1974-12-18",
        "synopsis": "The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.",
        "directors": [
            "Francis Ford Coppola"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "The Lord of the Rings: The Return of the King": {
        "name": "The Lord of the Rings: The Return of the King",
        "boxOffice": "379427292",
        "budget": "N/A",
        "cast": [
            "Elijah Wood",
            "Viggo Mortensen",
            "Ian McKellen"
        ],
        "countries": [
            "New Zealand",
            "United States"
        ],
        "duration": "201",
        "genres": [
            "Action",
            "Adventure",
            "Drama"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
        "releaseDate": "2003-12-17",
        "synopsis": "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
        "directors": [
            "Peter Jackson"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Pulp Fiction": {
        "name": "Pulp Fiction",
        "boxOffice": "107928762",
        "budget": "N/A",
        "cast": [
            "John Travolta",
            "Uma Thurman",
            "Samuel L. Jackson"
        ],
        "countries": [
            "United States"
        ],
        "duration": "154",
        "genres": [
            "Crime",
            "Drama"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
        "releaseDate": "1994-10-14",
        "synopsis": "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
        "directors": [
            "Quentin Tarantino"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Schindler's List": {
        "name": "Schindler's List",
        "boxOffice": "96898818",
        "budget": "N/A",
        "cast": [
            "Liam Neeson",
            "Ralph Fiennes",
            "Ben Kingsley"
        ],
        "countries": [
            "United States"
        ],
        "duration": "195",
        "genres": [
            "Biography",
            "Drama",
            "History"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
        "releaseDate": "1994-02-04",
        "synopsis": "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
        "directors": [
            "Steven Spielberg"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "12 Angry Men": {
        "name": "12 Angry Men",
        "boxOffice": "N/A",
        "budget": "N/A",
        "cast": [
            "Henry Fonda",
            "Lee J. Cobb",
            "Martin Balsam"
        ],
        "countries": [
            "United States"
        ],
        "duration": "96",
        "genres": [
            "Crime",
            "Drama"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg",
        "releaseDate": "1957-04-10",
        "synopsis": "The jury in a New York City murder trial is frustrated by a single member whose skeptical caution forces them to more carefully consider the evidence before jumping to a hasty verdict.",
        "directors": [
            "Sidney Lumet"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Inception": {
        "name": "Inception",
        "boxOffice": "292587330",
        "budget": "N/A",
        "cast": [
            "Leonardo DiCaprio",
            "Joseph Gordon-Levitt",
            "Elliot Page"
        ],
        "countries": [
            "United States",
            "United Kingdom"
        ],
        "duration": "148",
        "genres": [
            "Action",
            "Adventure",
            "Sci-Fi"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
        "releaseDate": "2010-07-16",
        "synopsis": "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.",
        "directors": [
            "Christopher Nolan"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Fight Club": {
        "name": "Fight Club",
        "boxOffice": "37030102",
        "budget": "N/A",
        "cast": [
            "Brad Pitt",
            "Edward Norton",
            "Meat Loaf"
        ],
        "countries": [
            "Germany",
            "United States"
        ],
        "duration": "139",
        "genres": [
            "Drama"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BNDIzNDU0YzEtYzE5Ni00ZjlkLTk5ZjgtNjM3NWE4YzA3Nzk3XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg",
        "releaseDate": "1999-10-15",
        "synopsis": "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.",
        "directors": [
            "David Fincher"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "The Lord of the Rings: The Fellowship of the Ring": {
        "name": "The Lord of the Rings: The Fellowship of the Ring",
        "boxOffice": "316115420",
        "budget": "N/A",
        "cast": [
            "Elijah Wood",
            "Ian McKellen",
            "Orlando Bloom"
        ],
        "countries": [
            "New Zealand",
            "United States"
        ],
        "duration": "178",
        "genres": [
            "Action",
            "Adventure",
            "Drama"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
        "releaseDate": "2001-12-19",
        "synopsis": "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
        "directors": [
            "Peter Jackson"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Forrest Gump": {
        "name": "Forrest Gump",
        "boxOffice": "330455270",
        "budget": "N/A",
        "cast": [
            "Tom Hanks",
            "Robin Wright",
            "Gary Sinise"
        ],
        "countries": [
            "United States"
        ],
        "duration": "142",
        "genres": [
            "Drama",
            "Romance"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
        "releaseDate": "1994-07-06",
        "synopsis": "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood swe...",
        "directors": [
            "Robert Zemeckis"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "The Good, the Bad and the Ugly": {
        "name": "The Good, the Bad and the Ugly",
        "boxOffice": "25100000",
        "budget": "N/A",
        "cast": [
            "Clint Eastwood",
            "Eli Wallach",
            "Lee Van Cleef"
        ],
        "countries": [
            "Italy",
            "Spain",
            "West Germany"
        ],
        "duration": "178",
        "genres": [
            "Adventure",
            "Western"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BNjJlYmNkZGItM2NhYy00MjlmLTk5NmQtNjg1NmM2ODU4OTMwXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg",
        "releaseDate": "1967-12-29",
        "synopsis": "A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried in a remote cemetery.",
        "directors": [
            "Sergio Leone"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "The Lord of the Rings: The Two Towers": {
        "name": "The Lord of the Rings: The Two Towers",
        "boxOffice": "342952511",
        "budget": "N/A",
        "cast": [
            "Elijah Wood",
            "Ian McKellen",
            "Viggo Mortensen"
        ],
        "countries": [
            "New Zealand",
            "United States"
        ],
        "duration": "179",
        "genres": [
            "Action",
            "Adventure",
            "Drama"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BZGMxZTdjZmYtMmE2Ni00ZTdkLWI5NTgtNjlmMjBiNzU2MmI5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
        "releaseDate": "2002-12-18",
        "synopsis": "While Frodo and Sam edge closer to Mordor with the help of the shifty Gollum, the divided fellowship makes a stand against Sauron's new ally, Saruman, and his hordes of Isengard.",
        "directors": [
            "Peter Jackson"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "The Matrix": {
        "name": "The Matrix",
        "boxOffice": "172076928",
        "budget": "N/A",
        "cast": [
            "Keanu Reeves",
            "Laurence Fishburne",
            "Carrie-Anne Moss"
        ],
        "countries": [
            "United States",
            "Australia"
        ],
        "duration": "136",
        "genres": [
            "Action",
            "Sci-Fi"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
        "releaseDate": "1999-03-31",
        "synopsis": "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.",
        "directors": [
            "Lana Wachowski",
            "Lilly Wachowski"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Goodfellas": {
        "name": "Goodfellas",
        "boxOffice": "46909721",
        "budget": "N/A",
        "cast": [
            "Robert De Niro",
            "Ray Liotta",
            "Joe Pesci"
        ],
        "countries": [
            "United States"
        ],
        "duration": "145",
        "genres": [
            "Biography",
            "Crime",
            "Drama"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BY2NkZjEzMDgtN2RjYy00YzM1LWI4ZmQtMjIwYjFjNmI3ZGEwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
        "releaseDate": "1990-09-21",
        "synopsis": "The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito in the Italian-American crime syndicate.",
        "directors": [
            "Martin Scorsese"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Star Wars: Episode V - The Empire Strikes Back": {
        "name": "Star Wars: Episode V - The Empire Strikes Back",
        "boxOffice": "292753960",
        "budget": "N/A",
        "cast": [
            "Mark Hamill",
            "Harrison Ford",
            "Carrie Fisher"
        ],
        "countries": [
            "United States"
        ],
        "duration": "124",
        "genres": [
            "Action",
            "Adventure",
            "Fantasy"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
        "releaseDate": "1980-06-20",
        "synopsis": "After the Rebels are overpowered by the Empire, Luke Skywalker begins his Jedi training with Yoda, while his friends are pursued across the galaxy by Darth Vader and bounty hunter Boba Fett.",
        "directors": [
            "Irvin Kershner"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "One Flew Over the Cuckoo's Nest": {
        "name": "One Flew Over the Cuckoo's Nest",
        "boxOffice": "108981275",
        "budget": "N/A",
        "cast": [
            "Jack Nicholson",
            "Louise Fletcher",
            "Michael Berryman"
        ],
        "countries": [
            "United States"
        ],
        "duration": "133",
        "genres": [
            "Drama"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BZjA0OWVhOTAtYWQxNi00YzNhLWI4ZjYtNjFjZTEyYjJlNDVlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
        "releaseDate": "1975-11-19",
        "synopsis": "In the Fall of 1963, a Korean War veteran and criminal pleads insanity and is admitted to a mental institution, where he rallies up the scared patients against the tyrannical nurse.",
        "directors": [
            "Milos Forman"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Harakiri": {
        "name": "Harakiri",
        "boxOffice": "N/A",
        "budget": "N/A",
        "cast": [
            "Tatsuya Nakadai",
            "Akira Ishihama",
            "Shima Iwashita"
        ],
        "countries": [
            "Japan"
        ],
        "duration": "133",
        "genres": [
            "Action",
            "Drama",
            "Mystery"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BYjBmYTQ1NjItZWU5MS00YjI0LTg2OTYtYmFkN2JkMmNiNWVkXkEyXkFqcGdeQXVyMTMxMTY0OTQ@._V1_SX300.jpg",
        "releaseDate": "1964-08-04",
        "synopsis": "When a ronin requesting seppuku at a feudal lord's palace is told of the brutal suicide of another ronin who previously visited, he reveals how their pasts are intertwined - and in doing so challenges the clan's integrity.",
        "directors": [
            "Masaki Kobayashi"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Parasite": {
        "name": "Parasite",
        "boxOffice": "53369749",
        "budget": "N/A",
        "cast": [
            "Song Kang-ho",
            "Lee Sun-kyun",
            "Cho Yeo-jeong"
        ],
        "countries": [
            "South Korea"
        ],
        "duration": "132",
        "genres": [
            "Drama",
            "Thriller"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
        "releaseDate": "2019-11-08",
        "synopsis": "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
        "directors": [
            "Bong Joon Ho"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Interstellar": {
        "name": "Interstellar",
        "boxOffice": "188020017",
        "budget": "N/A",
        "cast": [
            "Matthew McConaughey",
            "Anne Hathaway",
            "Jessica Chastain"
        ],
        "countries": [
            "United States",
            "United Kingdom",
            "Canada"
        ],
        "duration": "169",
        "genres": [
            "Adventure",
            "Drama",
            "Sci-Fi"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
        "releaseDate": "2014-11-07",
        "synopsis": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        "directors": [
            "Christopher Nolan"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "City of God": {
        "name": "City of God",
        "boxOffice": "7564459",
        "budget": "N/A",
        "cast": [
            "Alexandre Rodrigues",
            "Leandro Firmino",
            "Matheus Nachtergaele"
        ],
        "countries": [
            "Brazil",
            "France",
            "Germany"
        ],
        "duration": "130",
        "genres": [
            "Crime",
            "Drama"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BOTMwYjc5ZmItYTFjZC00ZGQ3LTlkNTMtMjZiNTZlMWQzNzI5XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
        "releaseDate": "2004-02-13",
        "synopsis": "In the slums of Rio, two kids' paths diverge as one struggles to become a photographer and the other a kingpin.",
        "directors": [
            "Fernando Meirelles",
            "K\u00e1tia Lund"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Spirited Away": {
        "name": "Spirited Away",
        "boxOffice": "15205725",
        "budget": "N/A",
        "cast": [
            "Daveigh Chase",
            "Suzanne Pleshette",
            "Miyu Irino"
        ],
        "countries": [
            "Japan"
        ],
        "duration": "125",
        "genres": [
            "Animation",
            "Adventure",
            "Family"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BMjlmZmI5MDctNDE2YS00YWE0LWE5ZWItZDBhYWQ0NTcxNWRhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
        "releaseDate": "2003-03-28",
        "synopsis": "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches and spirits, a world where humans are changed into beasts.",
        "directors": [
            "Hayao Miyazaki"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Saving Private Ryan": {
        "name": "Saving Private Ryan",
        "boxOffice": "217049603",
        "budget": "N/A",
        "cast": [
            "Tom Hanks",
            "Matt Damon",
            "Tom Sizemore"
        ],
        "countries": [
            "United States"
        ],
        "duration": "169",
        "genres": [
            "Drama",
            "War"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BZjhkMDM4MWItZTVjOC00ZDRhLThmYTAtM2I5NzBmNmNlMzI1XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SX300.jpg",
        "releaseDate": "1998-07-24",
        "synopsis": "Following the Normandy Landings, a group of U.S. soldiers go behind enemy lines to retrieve a paratrooper whose brothers have been killed in action.",
        "directors": [
            "Steven Spielberg"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "The Green Mile": {
        "name": "The Green Mile",
        "boxOffice": "136801374",
        "budget": "N/A",
        "cast": [
            "Tom Hanks",
            "Michael Clarke Duncan",
            "David Morse"
        ],
        "countries": [
            "United States"
        ],
        "duration": "189",
        "genres": [
            "Crime",
            "Drama",
            "Fantasy"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BMTUxMzQyNjA5MF5BMl5BanBnXkFtZTYwOTU2NTY3._V1_SX300.jpg",
        "releaseDate": "1999-12-10",
        "synopsis": "The lives of guards on Death Row are affected by one of their charges: a black man accused of child murder and rape, yet who has a mysterious gift.",
        "directors": [
            "Frank Darabont"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Life Is Beautiful": {
        "name": "Life Is Beautiful",
        "boxOffice": "57563264",
        "budget": "N/A",
        "cast": [
            "Roberto Benigni",
            "Nicoletta Braschi",
            "Giorgio Cantarini"
        ],
        "countries": [
            "Italy"
        ],
        "duration": "116",
        "genres": [
            "Comedy",
            "Drama",
            "Romance"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BYmJmM2Q4NmMtYThmNC00ZjRlLWEyZmItZTIwOTBlZDQ3NTQ1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
        "releaseDate": "1997-12-20",
        "synopsis": "When an open-minded Jewish waiter and his son become victims of the Holocaust, he uses a perfect mixture of will, humor and imagination to protect his son from the dangers around their camp.",
        "directors": [
            "Roberto Benigni"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Seven Samurai": {
        "name": "Seven Samurai",
        "boxOffice": "318649",
        "budget": "N/A",
        "cast": [
            "Toshir\u00f4 Mifune",
            "Takashi Shimura",
            "Keiko Tsushima"
        ],
        "countries": [
            "Japan"
        ],
        "duration": "207",
        "genres": [
            "Action",
            "Drama"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BNWQ3OTM4ZGItMWEwZi00MjI5LWI3YzgtNTYwNWRkNmIzMGI5XkEyXkFqcGdeQXVyNDY2MTk1ODk@._V1_SX300.jpg",
        "releaseDate": "1956-11-19",
        "synopsis": "Farmers from a village exploited by bandits hire a veteran samurai for protection, who gathers six other samurai to join him.",
        "directors": [
            "Akira Kurosawa"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "The Silence of the Lambs": {
        "name": "The Silence of the Lambs",
        "boxOffice": "130742922",
        "budget": "N/A",
        "cast": [
            "Jodie Foster",
            "Anthony Hopkins",
            "Lawrence A. Bonney"
        ],
        "countries": [
            "United States"
        ],
        "duration": "118",
        "genres": [
            "Crime",
            "Drama",
            "Thriller"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1MmEtYzM1M2ZmMGMwMTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
        "releaseDate": "1991-02-14",
        "synopsis": "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.",
        "directors": [
            "Jonathan Demme"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Star Wars: Episode IV - A New Hope": {
        "name": "Star Wars: Episode IV - A New Hope",
        "boxOffice": "460998507",
        "budget": "N/A",
        "cast": [
            "Mark Hamill",
            "Harrison Ford",
            "Carrie Fisher"
        ],
        "countries": [
            "United States"
        ],
        "duration": "121",
        "genres": [
            "Action",
            "Adventure",
            "Fantasy"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_SX300.jpg",
        "releaseDate": "1977-05-25",
        "synopsis": "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth ...",
        "directors": [
            "George Lucas"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Anand": {
        "name": "Anand",
        "boxOffice": "N/A",
        "budget": "N/A",
        "cast": [
            "Rajesh Khanna",
            "Amitabh Bachchan",
            "Sumita Sanyal"
        ],
        "countries": [
            "India"
        ],
        "duration": "122",
        "genres": [
            "Drama",
            "Musical"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BMzI4MjcxNGMtZmY1Zi00ZGU5LTk4MDMtNTljMDJmYTNjZjcxXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_SX300.jpg",
        "releaseDate": "1971-03-12",
        "synopsis": "The story of a terminally ill man who wishes to live life to the fullest before the inevitable occurs, as told by his best friend.",
        "directors": [
            "Hrishikesh Mukherjee"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "It's a Wonderful Life": {
        "name": "It's a Wonderful Life",
        "boxOffice": "1483643",
        "budget": "N/A",
        "cast": [
            "James Stewart",
            "Donna Reed",
            "Lionel Barrymore"
        ],
        "countries": [
            "United States"
        ],
        "duration": "130",
        "genres": [
            "Drama",
            "Family",
            "Fantasy"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BZjc4NDZhZWMtNGEzYS00ZWU2LThlM2ItNTA0YzQ0OTExMTE2XkEyXkFqcGdeQXVyNjUwMzI2NzU@._V1_SX300.jpg",
        "releaseDate": "1947-01-07",
        "synopsis": "An angel is sent from Heaven to help a desperately frustrated businessman by showing him what life would have been like if he had never existed.",
        "directors": [
            "Frank Capra"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Joker": {
        "name": "Joker",
        "boxOffice": "335477657",
        "budget": "N/A",
        "cast": [
            "Joaquin Phoenix",
            "Robert De Niro",
            "Zazie Beetz"
        ],
        "countries": [
            "United States",
            "Canada"
        ],
        "duration": "122",
        "genres": [
            "Crime",
            "Drama",
            "Thriller"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
        "releaseDate": "2019-10-04",
        "synopsis": "The rise of Arthur Fleck, from aspiring stand-up comedian and pariah to Gotham's clown prince and leader of the revolution.",
        "directors": [
            "Todd Phillips"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Ayla": {
        "name": "Ayla",
        "boxOffice": "N/A",
        "budget": "N/A",
        "cast": [
            "Nicholas Wilder",
            "Tristan Risk",
            "Dee Wallace"
        ],
        "countries": [
            "United States"
        ],
        "duration": "86",
        "genres": [
            "Drama",
            "Fantasy",
            "Horror"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BODU3YTkzMGQtNzE4YS00NTQ3LWExYzAtZDRjZWY3ZmQ2NzBiXkEyXkFqcGdeQXVyMzQwMjc0NTU@._V1_SX300.jpg",
        "releaseDate": "2017-10-06",
        "synopsis": "A man haunted by the mysterious death of his 4-year-old sister brings her back to life thirty years later as an adult woman, with dire consequences.",
        "directors": [
            "Elias"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Whiplash": {
        "name": "Whiplash",
        "boxOffice": "13092000",
        "budget": "N/A",
        "cast": [
            "Miles Teller",
            "J.K. Simmons",
            "Melissa Benoist"
        ],
        "countries": [
            "United States"
        ],
        "duration": "106",
        "genres": [
            "Drama",
            "Music"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BOTA5NDZlZGUtMjAxOS00YTRkLTkwYmMtYWQ0NWEwZDZiNjEzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
        "releaseDate": "2014-10-15",
        "synopsis": "A promising young drummer enrolls at a cut-throat music conservatory where his dreams of greatness are mentored by an instructor who will stop at nothing to realize a student's potential.",
        "directors": [
            "Damien Chazelle"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Untouchable": {
        "name": "Untouchable",
        "boxOffice": "N/A",
        "budget": "N/A",
        "cast": [
            "Harvey Weinstein",
            "Benjamin Brafman",
            "Hope Exiner D'Amore"
        ],
        "countries": [
            "United Kingdom"
        ],
        "duration": "98",
        "genres": [
            "Documentary",
            "Biography",
            "Crime"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BNmRlYWM3NmEtOTNkYy00OTk5LWFkNTktZDBjMzJjMzI1MWQ0XkEyXkFqcGdeQXVyNTEyNjg4MzI@._V1_SX300.jpg",
        "releaseDate": "2019-09-02",
        "synopsis": "A look at the rise and fall of disgraced Hollywood producer Harvey Weinstein featuring interviews with former colleagues and those who accused him of sexual misconduct.",
        "directors": [
            "Ursula Macfarlane"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "The Prestige": {
        "name": "The Prestige",
        "boxOffice": "53089891",
        "budget": "N/A",
        "cast": [
            "Christian Bale",
            "Hugh Jackman",
            "Scarlett Johansson"
        ],
        "countries": [
            "United Kingdom",
            "United States"
        ],
        "duration": "130",
        "genres": [
            "Drama",
            "Mystery",
            "Sci-Fi"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BMjA4NDI0MTIxNF5BMl5BanBnXkFtZTYwNTM0MzY2._V1_SX300.jpg",
        "releaseDate": "2006-10-20",
        "synopsis": "After a tragic accident, two stage magicians in 1890s London engage in a battle to create the ultimate illusion while sacrificing everything they have to outwit each other.",
        "directors": [
            "Christopher Nolan"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "The Departed": {
        "name": "The Departed",
        "boxOffice": "132399394",
        "budget": "N/A",
        "cast": [
            "Leonardo DiCaprio",
            "Matt Damon",
            "Jack Nicholson"
        ],
        "countries": [
            "United States",
            "Hong Kong"
        ],
        "duration": "151",
        "genres": [
            "Crime",
            "Drama",
            "Thriller"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BMTI1MTY2OTIxNV5BMl5BanBnXkFtZTYwNjQ4NjY3._V1_SX300.jpg",
        "releaseDate": "2006-10-06",
        "synopsis": "An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in South Boston.",
        "directors": [
            "Martin Scorsese"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "The Pianist": {
        "name": "The Pianist",
        "boxOffice": "32572577",
        "budget": "N/A",
        "cast": [
            "Adrien Brody",
            "Thomas Kretschmann",
            "Frank Finlay"
        ],
        "countries": [
            "France",
            "Poland",
            "Germany",
            "United Kingdom"
        ],
        "duration": "150",
        "genres": [
            "Biography",
            "Drama",
            "Music"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BOWRiZDIxZjktMTA1NC00MDQ2LWEzMjUtMTliZmY3NjQ3ODJiXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
        "releaseDate": "2003-03-28",
        "synopsis": "A Polish Jewish musician struggles to survive the destruction of the Warsaw ghetto of World War II.",
        "directors": [
            "Roman Polanski"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Gladiator": {
        "name": "Gladiator",
        "boxOffice": "187705427",
        "budget": "N/A",
        "cast": [
            "Russell Crowe",
            "Joaquin Phoenix",
            "Connie Nielsen"
        ],
        "countries": [
            "United States",
            "United Kingdom",
            "Malta",
            "Morocco"
        ],
        "duration": "155",
        "genres": [
            "Action",
            "Adventure",
            "Drama"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BMDliMmNhNDEtODUyOS00MjNlLTgxODEtN2U3NzIxMGVkZTA1L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
        "releaseDate": "2000-05-05",
        "synopsis": "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
        "directors": [
            "Ridley Scott"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "American History X": {
        "name": "American History X",
        "boxOffice": "6719864",
        "budget": "N/A",
        "cast": [
            "Edward Norton",
            "Edward Furlong",
            "Beverly D'Angelo"
        ],
        "countries": [
            "United States"
        ],
        "duration": "119",
        "genres": [
            "Crime",
            "Drama"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BZTJhN2FkYWEtMGI0My00YWM4LWI2MjAtM2UwNjY4MTI2ZTQyXkEyXkFqcGdeQXVyNjc3MjQzNTI@._V1_SX300.jpg",
        "releaseDate": "1998-11-20",
        "synopsis": "Living a life marked by violence, neo-Nazi Derek finally goes to prison after killing two black youths. Upon his release, Derek vows to change; he hopes to prevent his brother, Danny, who idolizes Derek, from following in his foot...",
        "directors": [
            "Tony Kaye"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "The Usual Suspects": {
        "name": "The Usual Suspects",
        "boxOffice": "23341568",
        "budget": "N/A",
        "cast": [
            "Kevin Spacey",
            "Gabriel Byrne",
            "Chazz Palminteri"
        ],
        "countries": [
            "United States",
            "Germany"
        ],
        "duration": "106",
        "genres": [
            "Crime",
            "Drama",
            "Mystery"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BYTViNjMyNmUtNDFkNC00ZDRlLThmMDUtZDU2YWE4NGI2ZjVmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
        "releaseDate": "1995-08-16",
        "synopsis": "A sole survivor tells of the twisty events leading up to a horrific gun battle on a boat, which began when five criminals met at a seemingly random police lineup.",
        "directors": [
            "Bryan Singer"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Leon": {
        "name": "Leon",
        "boxOffice": "N/A",
        "budget": "N/A",
        "cast": [
            "Tom Juddy",
            "Jastmo Authur",
            "Henriette Brewster"
        ],
        "countries": [
            "France",
            "Germany"
        ],
        "duration": "3",
        "genres": [
            "Animation",
            "Short",
            "Family"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BNTRiNTdiZDEtYjIwNS00NDNhLTgxMzMtMWFkOTZiYzkxODRiXkEyXkFqcGdeQXVyMzIzNTg4NzQ@._V1_SX300.jpg",
        "releaseDate": "N/A",
        "synopsis": "N/A",
        "directors": [
            "N/A"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "The Lion King": {
        "name": "The Lion King",
        "boxOffice": "422783777",
        "budget": "N/A",
        "cast": [
            "Matthew Broderick",
            "Jeremy Irons",
            "James Earl Jones"
        ],
        "countries": [
            "United States"
        ],
        "duration": "88",
        "genres": [
            "Animation",
            "Adventure",
            "Drama"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BYTYxNGMyZTYtMjE3MS00MzNjLWFjNmYtMDk3N2FmM2JiM2M1XkEyXkFqcGdeQXVyNjY5NDU4NzI@._V1_SX300.jpg",
        "releaseDate": "1994-06-24",
        "synopsis": "Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself.",
        "directors": [
            "Roger Allers",
            "Rob Minkoff"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Terminator 2: Judgment Day": {
        "name": "Terminator 2: Judgment Day",
        "boxOffice": "205881154",
        "budget": "N/A",
        "cast": [
            "Arnold Schwarzenegger",
            "Linda Hamilton",
            "Edward Furlong"
        ],
        "countries": [
            "United States"
        ],
        "duration": "137",
        "genres": [
            "Action",
            "Sci-Fi"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BMGU2NzRmZjUtOGUxYS00ZjdjLWEwZWItY2NlM2JhNjkxNTFmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
        "releaseDate": "1991-07-03",
        "synopsis": "A cyborg, identical to the one who failed to kill Sarah Connor, must now protect her 10-year old son John from an even more advanced and powerful cyborg.",
        "directors": [
            "James Cameron"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Cinema Paradiso": {
        "name": "Cinema Paradiso",
        "boxOffice": "12397210",
        "budget": "N/A",
        "cast": [
            "Philippe Noiret",
            "Enzo Cannavale",
            "Antonella Attili"
        ],
        "countries": [
            "Italy",
            "France"
        ],
        "duration": "155",
        "genres": [
            "Drama",
            "Romance"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BM2FhYjEyYmYtMDI1Yy00YTdlLWI2NWQtYmEzNzAxOGY1NjY2XkEyXkFqcGdeQXVyNTA3NTIyNDg@._V1_SX300.jpg",
        "releaseDate": "1990-02-23",
        "synopsis": "A filmmaker recalls his childhood when falling in love with the pictures at the cinema of his home village and forms a deep friendship with the cinema's projectionist.",
        "directors": [
            "Giuseppe Tornatore"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Grave of the Fireflies": {
        "name": "Grave of the Fireflies",
        "boxOffice": "516962",
        "budget": "N/A",
        "cast": [
            "Tsutomu Tatsumi",
            "Ayano Shiraishi",
            "Akemi Yamaguchi"
        ],
        "countries": [
            "Japan"
        ],
        "duration": "89",
        "genres": [
            "Animation",
            "Drama",
            "War"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BZmY2NjUzNDQtNTgxNC00M2Q4LTljOWQtMjNjNDBjNWUxNmJlXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg",
        "releaseDate": "1989-07-26",
        "synopsis": "A young boy and his little sister struggle to survive in Japan during World War II.",
        "directors": [
            "Isao Takahata"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Back to the Future": {
        "name": "Back to the Future",
        "boxOffice": "212836762",
        "budget": "N/A",
        "cast": [
            "Michael J. Fox",
            "Christopher Lloyd",
            "Lea Thompson"
        ],
        "countries": [
            "United States"
        ],
        "duration": "116",
        "genres": [
            "Adventure",
            "Comedy",
            "Sci-Fi"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
        "releaseDate": "1985-07-03",
        "synopsis": "Marty McFly, a 17-year-old high school student, is accidentally sent 30 years into the past in a time-traveling DeLorean invented by his close friend, the maverick scientist Doc Brown.",
        "directors": [
            "Robert Zemeckis"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Once Upon a Time in the West": {
        "name": "Once Upon a Time in the West",
        "boxOffice": "5321508",
        "budget": "N/A",
        "cast": [
            "Henry Fonda",
            "Charles Bronson",
            "Claudia Cardinale"
        ],
        "countries": [
            "Italy",
            "United States"
        ],
        "duration": "165",
        "genres": [
            "Western"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BODQ3NDExOGYtMzI3Mi00NWRlLTkwNjAtNjc4MDgzZGJiZTA1XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg",
        "releaseDate": "1969-07-04",
        "synopsis": "A mysterious stranger with a harmonica joins forces with a notorious desperado to protect a beautiful widow from a ruthless assassin working for the railroad.",
        "directors": [
            "Sergio Leone"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Psycho": {
        "name": "Psycho",
        "boxOffice": "32000000",
        "budget": "N/A",
        "cast": [
            "Anthony Perkins",
            "Janet Leigh",
            "Vera Miles"
        ],
        "countries": [
            "United States"
        ],
        "duration": "109",
        "genres": [
            "Horror",
            "Mystery",
            "Thriller"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BNTQwNDM1YzItNDAxZC00NWY2LTk0M2UtNDIwNWI5OGUyNWUxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
        "releaseDate": "1960-09-08",
        "synopsis": "A Phoenix secretary embezzles $40,000 from her employer's client, goes on the run and checks into a remote motel run by a young man under the domination of his mother.",
        "directors": [
            "Alfred Hitchcock"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Casablanca": {
        "name": "Casablanca",
        "boxOffice": "4219709",
        "budget": "N/A",
        "cast": [
            "Humphrey Bogart",
            "Ingrid Bergman",
            "Paul Henreid"
        ],
        "countries": [
            "United States"
        ],
        "duration": "102",
        "genres": [
            "Drama",
            "Romance",
            "War"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BY2IzZGY2YmEtYzljNS00NTM5LTgwMzUtMzM1NjQ4NGI0OTk0XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SX300.jpg",
        "releaseDate": "1943-01-23",
        "synopsis": "A cynical expatriate American cafe owner struggles to decide whether or not to help his former lover and her fugitive husband escape the Nazis in French Morocco.",
        "directors": [
            "Michael Curtiz"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Modern Times": {
        "name": "Modern Times",
        "boxOffice": "163577",
        "budget": "N/A",
        "cast": [
            "Charles Chaplin",
            "Paulette Goddard",
            "Henry Bergman"
        ],
        "countries": [
            "United States"
        ],
        "duration": "87",
        "genres": [
            "Comedy",
            "Drama",
            "Romance"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BYjJiZjMzYzktNjU0NS00OTkxLWEwYzItYzdhYWJjN2QzMTRlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
        "releaseDate": "1936-02-25",
        "synopsis": "The Tramp struggles to live in modern industrial society with the help of a young homeless woman.",
        "directors": [
            "Charles Chaplin"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "City Lights": {
        "name": "City Lights",
        "boxOffice": "19181",
        "budget": "N/A",
        "cast": [
            "Charles Chaplin",
            "Virginia Cherrill",
            "Florence Lee"
        ],
        "countries": [
            "United States"
        ],
        "duration": "87",
        "genres": [
            "Comedy",
            "Drama",
            "Romance"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BY2I4MmM1N2EtM2YzOS00OWUzLTkzYzctNDc5NDg2N2IyODJmXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
        "releaseDate": "1931-03-07",
        "synopsis": "With the aid of a wealthy erratic tippler, a dewy-eyed tramp who has fallen in love with a sightless flower girl accumulates money to be able to help her medically.",
        "directors": [
            "Charles Chaplin"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Capernaum": {
        "name": "Capernaum",
        "boxOffice": "1661096",
        "budget": "N/A",
        "cast": [
            "Zain Al Rafeea",
            "Yordanos Shiferaw",
            "Boluwatife Treasure Bankole"
        ],
        "countries": [
            "Lebanon",
            "France",
            "Cyprus",
            "Qatar",
            "United Kingdom"
        ],
        "duration": "126",
        "genres": [
            "Drama"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BMmExNzU2ZWMtYzUwYi00YmM2LTkxZTQtNmVhNjY0NTMyMWI2XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
        "releaseDate": "2018-09-20",
        "synopsis": "While serving a five-year sentence for a violent crime, a 12-year-old boy sues his parents for neglect.",
        "directors": [
            "Nadine Labaki"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Your Name.": {
        "name": "Your Name.",
        "boxOffice": "5017246",
        "budget": "N/A",
        "cast": [
            "Ryunosuke Kamiki",
            "Mone Kamishiraishi",
            "Ryo Narita"
        ],
        "countries": [
            "Japan"
        ],
        "duration": "106",
        "genres": [
            "Animation",
            "Drama",
            "Fantasy"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BODRmZDVmNzUtZDA4ZC00NjhkLWI2M2UtN2M0ZDIzNDcxYThjL2ltYWdlXkEyXkFqcGdeQXVyNTk0MzMzODA@._V1_SX300.jpg",
        "releaseDate": "2017-04-07",
        "synopsis": "Two teenagers share a profound, magical connection upon discovering they are swapping bodies. Things manage to become even more complicated when the boy and girl decide to meet in person.",
        "directors": [
            "Makoto Shinkai"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Dangal": {
        "name": "Dangal",
        "boxOffice": "12391761",
        "budget": "N/A",
        "cast": [
            "Aamir Khan",
            "Sakshi Tanwar",
            "Fatima Sana Shaikh"
        ],
        "countries": [
            "India",
            "United States"
        ],
        "duration": "161",
        "genres": [
            "Action",
            "Biography",
            "Drama"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BMTQ4MzQzMzM2Nl5BMl5BanBnXkFtZTgwMTQ1NzU3MDI@._V1_SX300.jpg",
        "releaseDate": "2016-12-21",
        "synopsis": "Former wrestler Mahavir Singh Phogat and his two wrestler daughters struggle towards glory at the Commonwealth Games in the face of societal oppression.",
        "directors": [
            "Nitesh Tiwari"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Spider-Man: Into the Spider-Verse": {
        "name": "Spider-Man: Into the Spider-Verse",
        "boxOffice": "190241310",
        "budget": "N/A",
        "cast": [
            "Shameik Moore",
            "Jake Johnson",
            "Hailee Steinfeld"
        ],
        "countries": [
            "Canada",
            "United States"
        ],
        "duration": "117",
        "genres": [
            "Animation",
            "Action",
            "Adventure"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@._V1_SX300.jpg",
        "releaseDate": "2018-12-14",
        "synopsis": "Teen Miles Morales becomes the Spider-Man of his universe, and must join with five spider-powered individuals from other dimensions to stop a threat for all realities.",
        "directors": [
            "Bob Persichetti",
            "Peter Ramsey",
            "Rodney Rothman"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Avengers: Endgame": {
        "name": "Avengers: Endgame",
        "boxOffice": "858373000",
        "budget": "N/A",
        "cast": [
            "Robert Downey Jr.",
            "Chris Evans",
            "Mark Ruffalo"
        ],
        "countries": [
            "United States"
        ],
        "duration": "181",
        "genres": [
            "Action",
            "Adventure",
            "Drama"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
        "releaseDate": "2019-04-26",
        "synopsis": "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
        "directors": [
            "Anthony Russo",
            "Joe Russo"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Avengers: Infinity War": {
        "name": "Avengers: Infinity War",
        "boxOffice": "678815482",
        "budget": "N/A",
        "cast": [
            "Robert Downey Jr.",
            "Chris Hemsworth",
            "Mark Ruffalo"
        ],
        "countries": [
            "United States"
        ],
        "duration": "149",
        "genres": [
            "Action",
            "Adventure",
            "Sci-Fi"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
        "releaseDate": "2018-04-27",
        "synopsis": "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.",
        "directors": [
            "Anthony Russo",
            "Joe Russo"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Drishyam": {
        "name": "Drishyam",
        "boxOffice": "N/A",
        "budget": "N/A",
        "cast": [
            "Ajay Devgn",
            "Shriya Saran",
            "Tabu"
        ],
        "countries": [
            "India"
        ],
        "duration": "163",
        "genres": [
            "Crime",
            "Drama",
            "Mystery"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BYmJhZmJlYTItZmZlNy00MGY0LTg0ZGMtNWFkYWU5NTA1YTNhXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
        "releaseDate": "2015-07-31",
        "synopsis": "Desperate measures are taken by a man who tries to save his family from the dark side of the law, after they commit an unexpected crime.",
        "directors": [
            "Nishikant Kamat"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Coco": {
        "name": "Coco",
        "boxOffice": "210460015",
        "budget": "N/A",
        "cast": [
            "Anthony Gonzalez",
            "Gael Garc\u00eda Bernal",
            "Benjamin Bratt"
        ],
        "countries": [
            "United States",
            "Japan"
        ],
        "duration": "105",
        "genres": [
            "Animation",
            "Adventure",
            "Comedy"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BYjQ5NjM0Y2YtNjZkNC00ZDhkLWJjMWItN2QyNzFkMDE3ZjAxXkEyXkFqcGdeQXVyODIxMzk5NjA@._V1_SX300.jpg",
        "releaseDate": "2017-11-22",
        "synopsis": "Aspiring musician Miguel, confronted with his family's ancestral ban on music, enters the Land of the Dead to find his great-great-grandfather, a legendary singer.",
        "directors": [
            "Lee Unkrich",
            "Adrian Molina"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Django Unchained": {
        "name": "Django Unchained",
        "boxOffice": "162805434",
        "budget": "N/A",
        "cast": [
            "Jamie Foxx",
            "Christoph Waltz",
            "Leonardo DiCaprio"
        ],
        "countries": [
            "United States"
        ],
        "duration": "165",
        "genres": [
            "Drama",
            "Western"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BMjIyNTQ5NjQ1OV5BMl5BanBnXkFtZTcwODg1MDU4OA@@._V1_SX300.jpg",
        "releaseDate": "2012-12-25",
        "synopsis": "With the help of a German bounty-hunter, a freed slave sets out to rescue his wife from a brutal plantation owner in Mississippi.",
        "directors": [
            "Quentin Tarantino"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "The Dark Knight Rises": {
        "name": "The Dark Knight Rises",
        "boxOffice": "448149584",
        "budget": "N/A",
        "cast": [
            "Christian Bale",
            "Tom Hardy",
            "Anne Hathaway"
        ],
        "countries": [
            "United States",
            "United Kingdom"
        ],
        "duration": "164",
        "genres": [
            "Action",
            "Drama",
            "Thriller"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_SX300.jpg",
        "releaseDate": "2012-07-20",
        "synopsis": "Eight years after the Joker's reign of chaos, Batman is coerced out of exile with the assistance of the mysterious Selina Kyle in order to defend Gotham City from the vicious guerrilla terrorist Bane.",
        "directors": [
            "Christopher Nolan"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "3 Idiots": {
        "name": "3 Idiots",
        "boxOffice": "6532874",
        "budget": "N/A",
        "cast": [
            "Aamir Khan",
            "Madhavan",
            "Mona Singh"
        ],
        "countries": [
            "India"
        ],
        "duration": "170",
        "genres": [
            "Comedy",
            "Drama"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BNTkyOGVjMGEtNmQzZi00NzFlLTlhOWQtODYyMDc2ZGJmYzFhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
        "releaseDate": "2009-12-25",
        "synopsis": "Two friends are searching for their long lost companion. They revisit their college days and recall the memories of their friend who inspired them to think differently, even as the rest of the world called them \"idiots\".",
        "directors": [
            "Rajkumar Hirani"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Taare Zameen Par": {
        "name": "Taare Zameen Par",
        "boxOffice": "N/A",
        "budget": "N/A",
        "cast": [
            "Jonita Gandhi",
            "Tony Kakkar",
            "Sugandha Mishra"
        ],
        "countries": [
            "India"
        ],
        "duration": "N/A",
        "genres": [
            "Game-Show",
            "Music"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BZDY2ZmI5YzgtMTYwZi00NTg1LThkODgtNDIxNWI4Yjg0NzlhXkEyXkFqcGdeQXVyMTI1NDM3OTQ1._V1_SX300.jpg",
        "releaseDate": "2020-11-02",
        "synopsis": "Aspiring young singers from all over India showcase their talents under the mentorship of prominent artists to impress the judges.",
        "directors": [
            "N/A"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "WALL\u00b7E": {
        "name": "WALL\u00b7E",
        "boxOffice": "223808164",
        "budget": "N/A",
        "cast": [
            "Ben Burtt",
            "Elissa Knight",
            "Jeff Garlin"
        ],
        "countries": [
            "United States",
            "Japan"
        ],
        "duration": "98",
        "genres": [
            "Animation",
            "Adventure",
            "Family"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BMjExMTg5OTU0NF5BMl5BanBnXkFtZTcwMjMxMzMzMw@@._V1_SX300.jpg",
        "releaseDate": "2008-06-27",
        "synopsis": "In the distant future, a small waste-collecting robot inadvertently embarks on a space journey that will ultimately decide the fate of mankind.",
        "directors": [
            "Andrew Stanton"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "The Lives of Others": {
        "name": "The Lives of Others",
        "boxOffice": "11286112",
        "budget": "N/A",
        "cast": [
            "Ulrich M\u00fche",
            "Martina Gedeck",
            "Sebastian Koch"
        ],
        "countries": [
            "Germany",
            "France"
        ],
        "duration": "137",
        "genres": [
            "Drama",
            "Mystery",
            "Thriller"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BNmQyNmJjM2ItNTQzYi00ZjMxLWFjMDYtZjUyN2YwZDk5YWQ2XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg",
        "releaseDate": "2007-03-30",
        "synopsis": "In 1984 East Berlin, an agent of the secret police, conducting surveillance on a writer and his lover, finds himself becoming increasingly absorbed by their lives.",
        "directors": [
            "Florian Henckel von Donnersmarck"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Oldboy": {
        "name": "Oldboy",
        "boxOffice": "707481",
        "budget": "N/A",
        "cast": [
            "Choi Min-sik",
            "Yoo Ji-tae",
            "Kang Hye-jeong"
        ],
        "countries": [
            "South Korea"
        ],
        "duration": "120",
        "genres": [
            "Action",
            "Drama",
            "Mystery"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BMTI3NTQyMzU5M15BMl5BanBnXkFtZTcwMTM2MjgyMQ@@._V1_SX300.jpg",
        "releaseDate": "2003-11-21",
        "synopsis": "After being kidnapped and imprisoned for fifteen years, Oh Dae-Su is released, only to find that he must find his captor in five days.",
        "directors": [
            "Park Chan-wook"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Memento": {
        "name": "Memento",
        "boxOffice": "25544867",
        "budget": "N/A",
        "cast": [
            "Guy Pearce",
            "Carrie-Anne Moss",
            "Joe Pantoliano"
        ],
        "countries": [
            "United States"
        ],
        "duration": "113",
        "genres": [
            "Mystery",
            "Thriller"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BZTcyNjk1MjgtOWI3Mi00YzQwLWI5MTktMzY4ZmI2NDAyNzYzXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
        "releaseDate": "2001-05-25",
        "synopsis": "A man with short-term memory loss attempts to track down his wife's murderer.",
        "directors": [
            "Christopher Nolan"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Princess Mononoke": {
        "name": "Princess Mononoke",
        "boxOffice": "4845631",
        "budget": "N/A",
        "cast": [
            "Y\u00f4ji Matsuda",
            "Yuriko Ishida",
            "Y\u00fbko Tanaka"
        ],
        "countries": [
            "Japan"
        ],
        "duration": "134",
        "genres": [
            "Animation",
            "Action",
            "Adventure"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BNTZkYmI0MmEtNGFlZC00OWZjLWFjMmItMjk1OWZkOWJiZGVjXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
        "releaseDate": "1997-12-19",
        "synopsis": "On a journey to find the cure for a Tatarigami's curse, Ashitaka finds himself in the middle of a war between the forest gods and Tatara, a mining colony. In this quest he also meets San, the Mononoke Hime.",
        "directors": [
            "Hayao Miyazaki"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Once Upon a Time in America": {
        "name": "Once Upon a Time in America",
        "boxOffice": "5321508",
        "budget": "N/A",
        "cast": [
            "Robert De Niro",
            "James Woods",
            "Elizabeth McGovern"
        ],
        "countries": [
            "Italy",
            "United States"
        ],
        "duration": "229",
        "genres": [
            "Crime",
            "Drama"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BMGFkNWI4MTMtNGQ0OC00MWVmLTk3MTktOGYxN2Y2YWVkZWE2XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
        "releaseDate": "1984-06-01",
        "synopsis": "A former Prohibition-era Jewish gangster returns to the Lower East Side of Manhattan 35 years later, where he must once again confront the ghosts and regrets of his old life.",
        "directors": [
            "Sergio Leone"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Raiders of the Lost Ark": {
        "name": "Raiders of the Lost Ark",
        "boxOffice": "248159971",
        "budget": "N/A",
        "cast": [
            "Harrison Ford",
            "Karen Allen",
            "Paul Freeman"
        ],
        "countries": [
            "United States"
        ],
        "duration": "115",
        "genres": [
            "Action",
            "Adventure"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BNTU2ODkyY2MtMjU1NC00NjE1LWEzYjgtMWQ3MzRhMTE0NDc0XkEyXkFqcGdeQXVyMjM4MzQ4OTQ@._V1_SX300.jpg",
        "releaseDate": "1981-06-12",
        "synopsis": "In 1936, archaeologist and adventurer Indiana Jones is hired by the U.S. government to find the Ark of the Covenant before the Nazis can obtain its awesome powers.",
        "directors": [
            "Steven Spielberg"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "The Shining": {
        "name": "The Shining",
        "boxOffice": "45634352",
        "budget": "N/A",
        "cast": [
            "Jack Nicholson",
            "Shelley Duvall",
            "Danny Lloyd"
        ],
        "countries": [
            "United Kingdom",
            "United States"
        ],
        "duration": "146",
        "genres": [
            "Drama",
            "Horror"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BZWFlYmY2MGEtZjVkYS00YzU4LTg0YjQtYzY1ZGE3NTA5NGQxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
        "releaseDate": "1980-06-13",
        "synopsis": "A family heads to an isolated hotel for the winter where a sinister presence influences the father into violence, while his psychic son sees horrific forebodings from both past and future.",
        "directors": [
            "Stanley Kubrick"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Apocalypse Now": {
        "name": "Apocalypse Now",
        "boxOffice": "96042913",
        "budget": "N/A",
        "cast": [
            "Martin Sheen",
            "Marlon Brando",
            "Robert Duvall"
        ],
        "countries": [
            "United States"
        ],
        "duration": "147",
        "genres": [
            "Drama",
            "Mystery",
            "War"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BYmQyNTA1ZGItNjZjMi00NzFlLWEzMWEtNWMwN2Q2MjJhYzEyXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg",
        "releaseDate": "1979-08-15",
        "synopsis": "A U.S. Army officer serving in Vietnam is tasked with assassinating a renegade Special Forces Colonel who sees himself as a god.",
        "directors": [
            "Francis Ford Coppola"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Alien": {
        "name": "Alien",
        "boxOffice": "81900459",
        "budget": "N/A",
        "cast": [
            "Sigourney Weaver",
            "Tom Skerritt",
            "John Hurt"
        ],
        "countries": [
            "United Kingdom",
            "United States"
        ],
        "duration": "117",
        "genres": [
            "Horror",
            "Sci-Fi"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BOGQzZTBjMjQtOTVmMS00NGE5LWEyYmMtOGQ1ZGZjNmRkYjFhXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg",
        "releaseDate": "1979-06-22",
        "synopsis": "The crew of a commercial spacecraft encounter a deadly lifeform after investigating an unknown transmission.",
        "directors": [
            "Ridley Scott"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "High and Low": {
        "name": "High and Low",
        "boxOffice": "46808",
        "budget": "N/A",
        "cast": [
            "Toshir\u00f4 Mifune",
            "Yutaka Sada",
            "Tatsuya Nakadai"
        ],
        "countries": [
            "Japan"
        ],
        "duration": "143",
        "genres": [
            "Crime",
            "Drama",
            "Mystery"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BOTI4NTNhZDMtMWNkZi00MTRmLWJmZDQtMmJkMGVmZTEzODlhXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg",
        "releaseDate": "1963-11-26",
        "synopsis": "An executive of a Yokohama shoe company becomes a victim of extortion when his chauffeur's son is kidnapped by mistake and held for ransom.",
        "directors": [
            "Akira Kurosawa"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb": {
        "name": "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
        "boxOffice": "9440272",
        "budget": "N/A",
        "cast": [
            "Peter Sellers",
            "George C. Scott",
            "Sterling Hayden"
        ],
        "countries": [
            "United Kingdom",
            "United States"
        ],
        "duration": "95",
        "genres": [
            "Comedy",
            "War"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BZWI3ZTMxNjctMjdlNS00NmUwLWFiM2YtZDUyY2I3N2MxYTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
        "releaseDate": "1964-01-29",
        "synopsis": "An insane American general orders a bombing attack on the Soviet Union, triggering a path to nuclear holocaust that a war room full of politicians and generals frantically tries to stop.",
        "directors": [
            "Stanley Kubrick"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Witness for the Prosecution": {
        "name": "Witness for the Prosecution",
        "boxOffice": "N/A",
        "budget": "N/A",
        "cast": [
            "Tyrone Power",
            "Marlene Dietrich",
            "Charles Laughton"
        ],
        "countries": [
            "United States"
        ],
        "duration": "116",
        "genres": [
            "Crime",
            "Drama",
            "Mystery"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BNDQwODU5OWYtNDcyNi00MDQ1LThiOGMtZDkwNWJiM2Y3MDg0XkEyXkFqcGdeQXVyMDI2NDg0NQ@@._V1_SX300.jpg",
        "releaseDate": "1958-02-06",
        "synopsis": "A veteran British barrister must defend his client in a murder trial that has surprise after surprise.",
        "directors": [
            "Billy Wilder"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Paths of Glory": {
        "name": "Paths of Glory",
        "boxOffice": "N/A",
        "budget": "N/A",
        "cast": [
            "Kirk Douglas",
            "Ralph Meeker",
            "Adolphe Menjou"
        ],
        "countries": [
            "United States"
        ],
        "duration": "88",
        "genres": [
            "Drama",
            "War"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BOTI5Nzc0OTMtYzBkMS00NjkxLThmM2UtNjM2ODgxN2M5NjNkXkEyXkFqcGdeQXVyNjQ2MjQ5NzM@._V1_SX300.jpg",
        "releaseDate": "1957-12-25",
        "synopsis": "After refusing to attack an enemy position, a general accuses the soldiers of cowardice and their commanding officer must defend them.",
        "directors": [
            "Stanley Kubrick"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Rear Window": {
        "name": "Rear Window",
        "boxOffice": "36764313",
        "budget": "N/A",
        "cast": [
            "James Stewart",
            "Grace Kelly",
            "Wendell Corey"
        ],
        "countries": [
            "United States"
        ],
        "duration": "112",
        "genres": [
            "Mystery",
            "Thriller"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BNGUxYWM3M2MtMGM3Mi00ZmRiLWE0NGQtZjE5ODI2OTJhNTU0XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
        "releaseDate": "1954-09-01",
        "synopsis": "A photographer in a wheelchair spies on his neighbors from his Greenwich Village courtyard apartment window, and becomes convinced one of them has committed murder, despite the skepticism of his fashion-model girlfriend.",
        "directors": [
            "Alfred Hitchcock"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Sunset Blvd.": {
        "name": "Sunset Blvd.",
        "boxOffice": "299645",
        "budget": "N/A",
        "cast": [
            "William Holden",
            "Gloria Swanson",
            "Erich von Stroheim"
        ],
        "countries": [
            "United States"
        ],
        "duration": "110",
        "genres": [
            "Drama",
            "Film-Noir"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BMTU0NTkyNzYwMF5BMl5BanBnXkFtZTgwMDU0NDk5MTI@._V1_SX300.jpg",
        "releaseDate": "1950-08-04",
        "synopsis": "A screenwriter develops a dangerous relationship with a faded film star determined to make a triumphant return.",
        "directors": [
            "Billy Wilder"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "The Great Dictator": {
        "name": "The Great Dictator",
        "boxOffice": "N/A",
        "budget": "N/A",
        "cast": [
            "Charles Chaplin",
            "Paulette Goddard",
            "Jack Oakie"
        ],
        "countries": [
            "United States"
        ],
        "duration": "125",
        "genres": [
            "Comedy",
            "Drama",
            "War"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BMmExYWJjNTktNGUyZS00ODhmLTkxYzAtNWIzOGEyMGNiMmUwXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
        "releaseDate": "1941-03-07",
        "synopsis": "Dictator Adenoid Hynkel tries to expand his empire while a poor Jewish barber tries to avoid persecution from Hynkel's regime.",
        "directors": [
            "Charles Chaplin"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "1917": {
        "name": "1917",
        "boxOffice": "159227644",
        "budget": "N/A",
        "cast": [
            "Dean-Charles Chapman",
            "George MacKay",
            "Daniel Mays"
        ],
        "countries": [
            "United Kingdom",
            "United States",
            "India",
            "Spain"
        ],
        "duration": "119",
        "genres": [
            "Action",
            "Drama",
            "War"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BOTdmNTFjNDEtNzg0My00ZjkxLTg1ZDAtZTdkMDc2ZmFiNWQ1XkEyXkFqcGdeQXVyNTAzNzgwNTg@._V1_SX300.jpg",
        "releaseDate": "2020-01-10",
        "synopsis": "April 6th, 1917. As an infantry battalion assembles to wage war deep in enemy territory, two soldiers are assigned to race against time and deliver a message that will stop 1,600 men from walking straight into a deadly trap.",
        "directors": [
            "Sam Mendes"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Uri: The Surgical Strike": {
        "name": "Uri: The Surgical Strike",
        "boxOffice": "4186168",
        "budget": "N/A",
        "cast": [
            "Vicky Kaushal",
            "Paresh Rawal",
            "Mohit Raina"
        ],
        "countries": [
            "India"
        ],
        "duration": "138",
        "genres": [
            "Action",
            "Drama",
            "History"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BMWU4ZjNlNTQtOGE2MS00NDI0LWFlYjMtMmY3ZWVkMjJkNGRmXkEyXkFqcGdeQXVyNjE1OTQ0NjA@._V1_SX300.jpg",
        "releaseDate": "2019-01-11",
        "synopsis": "Indian army special forces execute a covert operation, avenging the killing of fellow army men at their base by a terrorist group.",
        "directors": [
            "Aditya Dhar"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Andhadhun": {
        "name": "Andhadhun",
        "boxOffice": "1193046",
        "budget": "N/A",
        "cast": [
            "Tabu",
            "Ayushmann Khurrana",
            "Radhika Apte"
        ],
        "countries": [
            "India"
        ],
        "duration": "139",
        "genres": [
            "Crime",
            "Mystery",
            "Thriller"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BZWZhMjhhZmYtOTIzOC00MGYzLWI1OGYtM2ZkN2IxNTI4ZWI3XkEyXkFqcGdeQXVyNDAzNDk0MTQ@._V1_SX300.jpg",
        "releaseDate": "2018-10-05",
        "synopsis": "A series of mysterious events change the life of a blind pianist, who must now report a crime that he should technically know nothing of.",
        "directors": [
            "Sriram Raghavan"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "The Hunt": {
        "name": "The Hunt",
        "boxOffice": "613308",
        "budget": "N/A",
        "cast": [
            "Mads Mikkelsen",
            "Thomas Bo Larsen",
            "Annika Wedderkopp"
        ],
        "countries": [
            "Denmark",
            "Sweden"
        ],
        "duration": "115",
        "genres": [
            "Drama"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BMTg2NDg3ODg4NF5BMl5BanBnXkFtZTcwNzk3NTc3Nw@@._V1_SX300.jpg",
        "releaseDate": "2013-01-10",
        "synopsis": "A teacher lives a lonely life, all the while struggling over his son's custody. His life slowly gets better as he finds love and receives good news from his son, but his new luck is about to be brutally shattered by an innocent li...",
        "directors": [
            "Thomas Vinterberg"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "A Separation": {
        "name": "A Separation",
        "boxOffice": "7099055",
        "budget": "N/A",
        "cast": [
            "Payman Maadi",
            "Leila Hatami",
            "Sareh Bayat"
        ],
        "countries": [
            "Iran",
            "France",
            "Australia"
        ],
        "duration": "123",
        "genres": [
            "Drama"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BN2JmMjViMjMtZTM5Mi00ZGZkLTk5YzctZDg5MjFjZDE4NjNkXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
        "releaseDate": "2011-03-16",
        "synopsis": "A married couple are faced with a difficult decision - to improve the life of their child by moving to another country or to stay in Iran and look after a deteriorating parent who has Alzheimer's disease.",
        "directors": [
            "Asghar Farhadi"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Incendies": {
        "name": "Incendies",
        "boxOffice": "2071334",
        "budget": "N/A",
        "cast": [
            "Lubna Azabal",
            "M\u00e9lissa D\u00e9sormeaux-Poulin",
            "Maxim Gaudette"
        ],
        "countries": [
            "Canada",
            "France"
        ],
        "duration": "131",
        "genres": [
            "Drama",
            "Mystery"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BMWE3MGYzZjktY2Q5Mi00Y2NiLWIyYWUtMmIyNzA3YmZlMGFhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
        "releaseDate": "2011-01-12",
        "synopsis": "Twins journey to the Middle East to discover their family history and fulfill their mother's last wishes.",
        "directors": [
            "Denis Villeneuve"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "N/A": {
        "name": "N/A",
        "boxOffice": "N/A",
        "budget": "N/A",
        "cast": [
            "N/A"
        ],
        "countries": [
            "N/A"
        ],
        "duration": "N/A",
        "genres": [
            "N/A"
        ],
        "image": "N/A",
        "releaseDate": "N/A",
        "synopsis": "N/A",
        "directors": [
            "N/A"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Toy Story 3": {
        "name": "Toy Story 3",
        "boxOffice": "415004880",
        "budget": "N/A",
        "cast": [
            "Tom Hanks",
            "Tim Allen",
            "Joan Cusack"
        ],
        "countries": [
            "United States",
            "Japan"
        ],
        "duration": "103",
        "genres": [
            "Animation",
            "Adventure",
            "Comedy"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BMTgxOTY4Mjc0MF5BMl5BanBnXkFtZTcwNTA4MDQyMw@@._V1_SX300.jpg",
        "releaseDate": "2010-06-18",
        "synopsis": "The toys are mistakenly delivered to a day-care center instead of the attic right before Andy leaves for college, and it's up to Woody to convince the other toys that they weren't abandoned and to return home.",
        "directors": [
            "Lee Unkrich"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Inglourious Basterds": {
        "name": "Inglourious Basterds",
        "boxOffice": "120540719",
        "budget": "N/A",
        "cast": [
            "Brad Pitt",
            "Diane Kruger",
            "Eli Roth"
        ],
        "countries": [
            "Germany",
            "United States"
        ],
        "duration": "153",
        "genres": [
            "Adventure",
            "Drama",
            "War"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BOTJiNDEzOWYtMTVjOC00ZjlmLWE0NGMtZmE1OWVmZDQ2OWJhXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg",
        "releaseDate": "2009-08-21",
        "synopsis": "In Nazi-occupied France during World War II, a plan to assassinate Nazi leaders by a group of Jewish U.S. soldiers coincides with a theatre owner's vengeful plans for the same.",
        "directors": [
            "Quentin Tarantino"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Eternal Sunshine of the Spotless Mind": {
        "name": "Eternal Sunshine of the Spotless Mind",
        "boxOffice": "34400301",
        "budget": "N/A",
        "cast": [
            "Jim Carrey",
            "Kate Winslet",
            "Tom Wilkinson"
        ],
        "countries": [
            "United States"
        ],
        "duration": "108",
        "genres": [
            "Drama",
            "Romance",
            "Sci-Fi"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BMTY4NzcwODg3Nl5BMl5BanBnXkFtZTcwNTEwOTMyMw@@._V1_SX300.jpg",
        "releaseDate": "2004-03-19",
        "synopsis": "When their relationship turns sour, a couple undergoes a medical procedure to have each other erased from their memories for ever.",
        "directors": [
            "Michel Gondry"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Am\u00e9lie": {
        "name": "Am\u00e9lie",
        "boxOffice": "33225499",
        "budget": "N/A",
        "cast": [
            "Audrey Tautou",
            "Mathieu Kassovitz",
            "Rufus"
        ],
        "countries": [
            "France",
            "Germany"
        ],
        "duration": "122",
        "genres": [
            "Comedy",
            "Romance"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BNDg4NjM1YjMtYmNhZC00MjM0LWFiZmYtNGY1YjA3MzZmODc5XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
        "releaseDate": "2002-02-08",
        "synopsis": "Am\u00e9lie is an innocent and naive girl in Paris with her own sense of justice. She decides to help those around her and, along the way, discovers love.",
        "directors": [
            "Jean-Pierre Jeunet"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Snatch": {
        "name": "Snatch",
        "boxOffice": "30328156",
        "budget": "N/A",
        "cast": [
            "Jason Statham",
            "Brad Pitt",
            "Stephen Graham"
        ],
        "countries": [
            "United Kingdom",
            "United States"
        ],
        "duration": "102",
        "genres": [
            "Comedy",
            "Crime"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BMTA2NDYxOGYtYjU1Mi00Y2QzLTgxMTQtMWI1MGI0ZGQ5MmU4XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
        "releaseDate": "2001-01-19",
        "synopsis": "Unscrupulous boxing promoters, violent bookmakers, a Russian gangster, incompetent amateur robbers and supposedly Jewish jewelers fight to track down a priceless stolen diamond.",
        "directors": [
            "Guy Ritchie"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Requiem for a Dream": {
        "name": "Requiem for a Dream",
        "boxOffice": "3635482",
        "budget": "N/A",
        "cast": [
            "Ellen Burstyn",
            "Jared Leto",
            "Jennifer Connelly"
        ],
        "countries": [
            "United States"
        ],
        "duration": "102",
        "genres": [
            "Drama"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BOTdiNzJlOWUtNWMwNS00NmFlLWI0YTEtZmI3YjIzZWUyY2Y3XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
        "releaseDate": "2000-12-15",
        "synopsis": "The drug-induced utopias of four Coney Island people are shattered when their addictions run deep.",
        "directors": [
            "Darren Aronofsky"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "American Beauty": {
        "name": "American Beauty",
        "boxOffice": "130096601",
        "budget": "N/A",
        "cast": [
            "Kevin Spacey",
            "Annette Bening",
            "Thora Birch"
        ],
        "countries": [
            "United States"
        ],
        "duration": "122",
        "genres": [
            "Drama"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BNTBmZWJkNjctNDhiNC00MGE2LWEwOTctZTk5OGVhMWMyNmVhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
        "releaseDate": "1999-10-01",
        "synopsis": "A sexually frustrated suburban father has a mid-life crisis after becoming infatuated with his daughter's best friend.",
        "directors": [
            "Sam Mendes"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Good Will Hunting": {
        "name": "Good Will Hunting",
        "boxOffice": "138433435",
        "budget": "N/A",
        "cast": [
            "Robin Williams",
            "Matt Damon",
            "Ben Affleck"
        ],
        "countries": [
            "United States"
        ],
        "duration": "126",
        "genres": [
            "Drama",
            "Romance"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BOTI0MzcxMTYtZDVkMy00NjY1LTgyMTYtZmUxN2M3NmQ2NWJhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
        "releaseDate": "1998-01-09",
        "synopsis": "Will Hunting, a janitor at M.I.T., has a gift for mathematics, but needs help from a psychologist to find direction in his life.",
        "directors": [
            "Gus Van Sant"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Children of Heaven": {
        "name": "Children of Heaven",
        "boxOffice": "933933",
        "budget": "N/A",
        "cast": [
            "Mohammad Amir Naji",
            "Amir Farrokh Hashemian",
            "Bahare Seddiqi"
        ],
        "countries": [
            "Iran"
        ],
        "duration": "89",
        "genres": [
            "Drama",
            "Family",
            "Sport"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BZTYwZWQ4ZTQtZWU0MS00N2YwLWEzMDItZWFkZWY0MWVjODVhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
        "releaseDate": "1999-01-22",
        "synopsis": "After a boy loses his sister's pair of shoes, he goes on a series of adventures in order to find them. When he can't, he tries a new way to \"win\" a new pair.",
        "directors": [
            "Majid Majidi"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "The Bandit": {
        "name": "The Bandit",
        "boxOffice": "N/A",
        "budget": "N/A",
        "cast": [
            "Sener Sen",
            "Ugur Y\u00fccel",
            "Sermin H\u00fcrmeri\u00e7"
        ],
        "countries": [
            "Turkey",
            "France",
            "Bulgaria"
        ],
        "duration": "128",
        "genres": [
            "Crime",
            "Drama",
            "Thriller"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BOGQ4ZjFmYjktOGNkNS00OWYyLWIyZjgtMGJjM2U1ZTA0ZTlhXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg",
        "releaseDate": "1996-11-29",
        "synopsis": "Baran the Bandit, released from prison after 35 years, searches for vengeance and his lover.",
        "directors": [
            "Yavuz Turgul"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Toy Story": {
        "name": "Toy Story",
        "boxOffice": "223225679",
        "budget": "N/A",
        "cast": [
            "Tom Hanks",
            "Tim Allen",
            "Don Rickles"
        ],
        "countries": [
            "United States",
            "Japan"
        ],
        "duration": "81",
        "genres": [
            "Animation",
            "Adventure",
            "Comedy"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BMDU2ZWJlMjktMTRhMy00ZTA5LWEzNDgtYmNmZTEwZTViZWJkXkEyXkFqcGdeQXVyNDQ2OTk4MzI@._V1_SX300.jpg",
        "releaseDate": "1995-11-25",
        "synopsis": "A cowboy doll is profoundly threatened and jealous when a new spaceman action figure supplants him as top toy in a boy's bedroom.",
        "directors": [
            "John Lasseter"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Braveheart": {
        "name": "Braveheart",
        "boxOffice": "75609945",
        "budget": "N/A",
        "cast": [
            "Mel Gibson",
            "Sophie Marceau",
            "Patrick McGoohan"
        ],
        "countries": [
            "United States"
        ],
        "duration": "178",
        "genres": [
            "Biography",
            "Drama",
            "History"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BMzkzMmU0YTYtOWM3My00YzBmLWI0YzctOGYyNTkwMWE5MTJkXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
        "releaseDate": "1995-05-24",
        "synopsis": "Scottish warrior William Wallace leads his countrymen in a rebellion to free his homeland from the tyranny of King Edward I of England.",
        "directors": [
            "Mel Gibson"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Reservoir Dogs": {
        "name": "Reservoir Dogs",
        "boxOffice": "2832029",
        "budget": "N/A",
        "cast": [
            "Harvey Keitel",
            "Tim Roth",
            "Michael Madsen"
        ],
        "countries": [
            "United States"
        ],
        "duration": "99",
        "genres": [
            "Crime",
            "Thriller"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BZmExNmEwYWItYmQzOS00YjA5LTk2MjktZjEyZDE1Y2QxNjA1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
        "releaseDate": "1992-09-02",
        "synopsis": "When a simple jewelry heist goes horribly wrong, the surviving criminals begin to suspect that one of them is a police informant.",
        "directors": [
            "Quentin Tarantino"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Full Metal Jacket": {
        "name": "Full Metal Jacket",
        "boxOffice": "46357676",
        "budget": "N/A",
        "cast": [
            "Matthew Modine",
            "R. Lee Ermey",
            "Vincent D'Onofrio"
        ],
        "countries": [
            "United Kingdom",
            "United States"
        ],
        "duration": "116",
        "genres": [
            "Drama",
            "War"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BNzkxODk0NjEtYjc4Mi00ZDI0LTgyYjEtYzc1NDkxY2YzYTgyXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
        "releaseDate": "1987-07-10",
        "synopsis": "A pragmatic U.S. Marine observes the dehumanizing effects the Vietnam War has on his fellow recruits from their brutal boot camp training to the bloody street fighting in Hue.",
        "directors": [
            "Stanley Kubrick"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Come and See": {
        "name": "Come and See",
        "boxOffice": "71909",
        "budget": "N/A",
        "cast": [
            "Aleksey Kravchenko",
            "Olga Mironova",
            "Liubomiras Laucevicius"
        ],
        "countries": [
            "Soviet Union"
        ],
        "duration": "142",
        "genres": [
            "Drama",
            "Thriller",
            "War"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BODM4Njg0NTAtYjI5Ny00ZjAxLTkwNmItZTMxMWU5M2U3M2RjXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
        "releaseDate": "1985-09-03",
        "synopsis": "After finding an old rifle, a young boy joins the Soviet resistance movement against ruthless German forces and experiences the horrors of World War II.",
        "directors": [
            "Elem Klimov"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Aliens": {
        "name": "Aliens",
        "boxOffice": "85160248",
        "budget": "N/A",
        "cast": [
            "Sigourney Weaver",
            "Michael Biehn",
            "Carrie Henn"
        ],
        "countries": [
            "United Kingdom",
            "United States"
        ],
        "duration": "137",
        "genres": [
            "Action",
            "Adventure",
            "Sci-Fi"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BOGJkY2EyOWYtYWRmNy00ZTEzLTllMDAtYzYzYjA0ZjFhZWJjXkEyXkFqcGdeQXVyMTUzMDUzNTI3._V1_SX300.jpg",
        "releaseDate": "1986-07-18",
        "synopsis": "Decades after surviving the Nostromo incident, Ellen Ripley is sent out to re-establish contact with a terraforming colony but finds herself battling the Alien Queen and her offspring.",
        "directors": [
            "James Cameron"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Amadeus": {
        "name": "Amadeus",
        "boxOffice": "51973029",
        "budget": "N/A",
        "cast": [
            "F. Murray Abraham",
            "Tom Hulce",
            "Elizabeth Berridge"
        ],
        "countries": [
            "United States",
            "France"
        ],
        "duration": "160",
        "genres": [
            "Biography",
            "Drama",
            "Music"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BNWJlNzUzNGMtYTAwMS00ZjI2LWFmNWQtODcxNWUxODA5YmU1XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg",
        "releaseDate": "1984-09-19",
        "synopsis": "The life, success and troubles of Wolfgang Amadeus Mozart, as told by Antonio Salieri, the contemporaneous composer who was deeply jealous of Mozart's talent and claimed to have murdered him.",
        "directors": [
            "Milos Forman"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Scarface": {
        "name": "Scarface",
        "boxOffice": "45408703",
        "budget": "N/A",
        "cast": [
            "Al Pacino",
            "Michelle Pfeiffer",
            "Steven Bauer"
        ],
        "countries": [
            "United States"
        ],
        "duration": "170",
        "genres": [
            "Crime",
            "Drama"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BNjdjNGQ4NDEtNTEwYS00MTgxLTliYzQtYzE2ZDRiZjFhZmNlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
        "releaseDate": "1983-12-09",
        "synopsis": "In 1980 Miami, a determined Cuban immigrant takes over a drug cartel and succumbs to greed.",
        "directors": [
            "Brian De Palma"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Star Wars: Episode VI - Return of the Jedi": {
        "name": "Star Wars: Episode VI - Return of the Jedi",
        "boxOffice": "316566101",
        "budget": "N/A",
        "cast": [
            "Mark Hamill",
            "Harrison Ford",
            "Carrie Fisher"
        ],
        "countries": [
            "United States"
        ],
        "duration": "131",
        "genres": [
            "Action",
            "Adventure",
            "Fantasy"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
        "releaseDate": "1983-05-25",
        "synopsis": "After rescuing Han Solo from Jabba the Hutt, the Rebels attempt to destroy the second Death Star, while Luke struggles to help Darth Vader back from the dark side.",
        "directors": [
            "Richard Marquand"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Das Boot": {
        "name": "Das Boot",
        "boxOffice": "11487676",
        "budget": "N/A",
        "cast": [
            "J\u00fcrgen Prochnow",
            "Herbert Gr\u00f6nemeyer",
            "Klaus Wennemann"
        ],
        "countries": [
            "West Germany",
            "Italy",
            "France",
            "United Kingdom"
        ],
        "duration": "149",
        "genres": [
            "Drama",
            "War"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BNDBjMWUxNTUtNjZiNi00YzJhLTgzNzUtMTRiY2FkZmMzYTNjXkEyXkFqcGdeQXVyMTUzMDUzNTI3._V1_SX300.jpg",
        "releaseDate": "1982-02-10",
        "synopsis": "A German U-boat stalks the frigid waters of the North Atlantic as its young crew experience the sheer terror and claustrophobic life of a submariner in World War II.",
        "directors": [
            "Wolfgang Petersen"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Taxi Driver": {
        "name": "Taxi Driver",
        "boxOffice": "28262574",
        "budget": "N/A",
        "cast": [
            "Robert De Niro",
            "Jodie Foster",
            "Cybill Shepherd"
        ],
        "countries": [
            "United States"
        ],
        "duration": "114",
        "genres": [
            "Crime",
            "Drama"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BM2M1MmVhNDgtNmI0YS00ZDNmLTkyNjctNTJiYTQ2N2NmYzc2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
        "releaseDate": "1976-02-09",
        "synopsis": "A mentally unstable veteran works as a nighttime taxi driver in New York City, where the perceived decadence and sleaze fuels his urge for violent action.",
        "directors": [
            "Martin Scorsese"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "The Sting": {
        "name": "The Sting",
        "boxOffice": "156000000",
        "budget": "N/A",
        "cast": [
            "Paul Newman",
            "Robert Redford",
            "Robert Shaw"
        ],
        "countries": [
            "United States"
        ],
        "duration": "129",
        "genres": [
            "Comedy",
            "Crime",
            "Drama"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BNGU3NjQ4YTMtZGJjOS00YTQ3LThmNmItMTI5MDE2ODI3NzY3XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg",
        "releaseDate": "1973-12-25",
        "synopsis": "Two grifters team up to pull off the ultimate con.",
        "directors": [
            "George Roy Hill"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "A Clockwork Orange": {
        "name": "A Clockwork Orange",
        "boxOffice": "26617553",
        "budget": "N/A",
        "cast": [
            "Malcolm McDowell",
            "Patrick Magee",
            "Michael Bates"
        ],
        "countries": [
            "United Kingdom",
            "United States"
        ],
        "duration": "136",
        "genres": [
            "Crime",
            "Sci-Fi"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BMTY3MjM1Mzc4N15BMl5BanBnXkFtZTgwODM0NzAxMDE@._V1_SX300.jpg",
        "releaseDate": "1972-02-02",
        "synopsis": "In the future, a sadistic gang leader is imprisoned and volunteers for a conduct-aversion experiment, but it doesn't go as planned.",
        "directors": [
            "Stanley Kubrick"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "2001: A Space Odyssey": {
        "name": "2001: A Space Odyssey",
        "boxOffice": "60481243",
        "budget": "N/A",
        "cast": [
            "Keir Dullea",
            "Gary Lockwood",
            "William Sylvester"
        ],
        "countries": [
            "United Kingdom",
            "United States"
        ],
        "duration": "149",
        "genres": [
            "Adventure",
            "Sci-Fi"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BMmNlYzRiNDctZWNhMi00MzI4LThkZTctMTUzMmZkMmFmNThmXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
        "releaseDate": "1970-06-24",
        "synopsis": "After uncovering a mysterious artifact buried beneath the Lunar surface, a spacecraft is sent to Jupiter to find its origins - a spacecraft manned by two men and the supercomputer H.A.L. 9000.",
        "directors": [
            "Stanley Kubrick"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "For a Few Dollars More": {
        "name": "For a Few Dollars More",
        "boxOffice": "15000000",
        "budget": "N/A",
        "cast": [
            "Clint Eastwood",
            "Lee Van Cleef",
            "Gian Maria Volont\u00e8"
        ],
        "countries": [
            "Italy",
            "Spain",
            "West Germany"
        ],
        "duration": "132",
        "genres": [
            "Drama",
            "Western"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BMzJlZTNkYjQtMTE1OS00YTJlLTgxNjItYzg4NTllODdkMzBiXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg",
        "releaseDate": "1967-05-10",
        "synopsis": "Two bounty hunters with the same intentions team up to track down an escaped Mexican outlaw.",
        "directors": [
            "Sergio Leone"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Lawrence of Arabia": {
        "name": "Lawrence of Arabia",
        "boxOffice": "45306425",
        "budget": "N/A",
        "cast": [
            "Peter O'Toole",
            "Alec Guinness",
            "Anthony Quinn"
        ],
        "countries": [
            "United Kingdom"
        ],
        "duration": "218",
        "genres": [
            "Adventure",
            "Biography",
            "Drama"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BYWY5ZjhjNGYtZmI2Ny00ODM0LWFkNzgtZmI1YzA2N2MxMzA0XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg",
        "releaseDate": "1962-12-11",
        "synopsis": "The story of T.E. Lawrence, the English officer who successfully united and led the diverse, often warring, Arab tribes during World War I in order to fight the Turks.",
        "directors": [
            "David Lean"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "The Apartment": {
        "name": "The Apartment",
        "boxOffice": "18600000",
        "budget": "N/A",
        "cast": [
            "Jack Lemmon",
            "Shirley MacLaine",
            "Fred MacMurray"
        ],
        "countries": [
            "United States"
        ],
        "duration": "125",
        "genres": [
            "Comedy",
            "Drama",
            "Romance"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BNzkwODFjNzItMmMwNi00MTU5LWE2MzktM2M4ZDczZGM1MmViXkEyXkFqcGdeQXVyNDY2MTk1ODk@._V1_SX300.jpg",
        "releaseDate": "1960-06-29",
        "synopsis": "A Manhattan insurance clerk tries to rise in his company by letting its executives use his apartment for trysts, but complications and a romance of his own ensue.",
        "directors": [
            "Billy Wilder"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "North by Northwest": {
        "name": "North by Northwest",
        "boxOffice": "66728",
        "budget": "N/A",
        "cast": [
            "Cary Grant",
            "Eva Marie Saint",
            "James Mason"
        ],
        "countries": [
            "United States"
        ],
        "duration": "136",
        "genres": [
            "Action",
            "Adventure",
            "Mystery"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BZDA3NDExMTUtMDlhOC00MmQ5LWExZGUtYmI1NGVlZWI4OWNiXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg",
        "releaseDate": "1959-12-18",
        "synopsis": "A New York City advertising executive goes on the run after being mistaken for a government agent by a group of foreign spies, and falls for a woman whose loyalties he begins to doubt.",
        "directors": [
            "Alfred Hitchcock"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Vertigo": {
        "name": "Vertigo",
        "boxOffice": "7705225",
        "budget": "N/A",
        "cast": [
            "James Stewart",
            "Kim Novak",
            "Barbara Bel Geddes"
        ],
        "countries": [
            "United States"
        ],
        "duration": "128",
        "genres": [
            "Mystery",
            "Romance",
            "Thriller"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BYTE4ODEwZDUtNDFjOC00NjAxLWEzYTQtYTI1NGVmZmFlNjdiL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg",
        "releaseDate": "1958-06-16",
        "synopsis": "A former San Francisco police detective juggles wrestling with his personal demons and becoming obsessed with the hauntingly beautiful woman he has been hired to trail, who may be deeply disturbed.",
        "directors": [
            "Alfred Hitchcock"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Singin' in the Rain": {
        "name": "Singin' in the Rain",
        "boxOffice": "1884537",
        "budget": "N/A",
        "cast": [
            "Gene Kelly",
            "Donald O'Connor",
            "Debbie Reynolds"
        ],
        "countries": [
            "United States"
        ],
        "duration": "103",
        "genres": [
            "Comedy",
            "Musical",
            "Romance"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BZDRjNGViMjQtOThlMi00MTA3LThkYzQtNzJkYjBkMGE0YzE1XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SX300.jpg",
        "releaseDate": "1952-04-10",
        "synopsis": "A silent film star falls for a chorus girl just as he and his delusionally jealous screen partner are trying to make the difficult transition to talking pictures in 1920s Hollywood.",
        "directors": [
            "Stanley Donen",
            "Gene Kelly"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Ikiru": {
        "name": "Ikiru",
        "boxOffice": "60239",
        "budget": "N/A",
        "cast": [
            "Takashi Shimura",
            "Nobuo Kaneko",
            "Shin'ichi Himori"
        ],
        "countries": [
            "Japan"
        ],
        "duration": "143",
        "genres": [
            "Drama"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BZmM0NGY3Y2MtMTA1YS00YmQzLTk2YTctYWFhMDkzMDRjZWQzXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg",
        "releaseDate": "1956-03-25",
        "synopsis": "A bureaucrat tries to find meaning in his life after he discovers he has terminal cancer.",
        "directors": [
            "Akira Kurosawa"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Bicycle Thieves": {
        "name": "Bicycle Thieves",
        "boxOffice": "371111",
        "budget": "N/A",
        "cast": [
            "Lamberto Maggiorani",
            "Enzo Staiola",
            "Lianella Carell"
        ],
        "countries": [
            "Italy"
        ],
        "duration": "89",
        "genres": [
            "Drama"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BNmI1ODdjODctMDlmMC00ZWViLWI5MzYtYzRhNDdjYmM3MzFjXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
        "releaseDate": "1949-12-13",
        "synopsis": "In post-war Italy, a working-class man's bicycle is stolen, endangering his efforts to find work. He and his son set out to find it.",
        "directors": [
            "Vittorio De Sica"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Double Indemnity": {
        "name": "Double Indemnity",
        "boxOffice": "N/A",
        "budget": "N/A",
        "cast": [
            "Fred MacMurray",
            "Barbara Stanwyck",
            "Edward G. Robinson"
        ],
        "countries": [
            "United States"
        ],
        "duration": "107",
        "genres": [
            "Crime",
            "Drama",
            "Film-Noir"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BOTdlNjgyZGUtOTczYi00MDdhLTljZmMtYTEwZmRiOWFkYjRhXkEyXkFqcGdeQXVyNDY2MTk1ODk@._V1_SX300.jpg",
        "releaseDate": "1944-07-06",
        "synopsis": "A Los Angeles insurance representative lets an alluring housewife seduce him into a scheme of insurance fraud and murder that arouses the suspicion of his colleague, an insurance investigator.",
        "directors": [
            "Billy Wilder"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Citizen Kane": {
        "name": "Citizen Kane",
        "boxOffice": "1627530",
        "budget": "N/A",
        "cast": [
            "Orson Welles",
            "Joseph Cotten",
            "Dorothy Comingore"
        ],
        "countries": [
            "United States"
        ],
        "duration": "119",
        "genres": [
            "Drama",
            "Mystery"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BYjBiOTYxZWItMzdiZi00NjlkLWIzZTYtYmFhZjhiMTljOTdkXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
        "releaseDate": "1941-09-05",
        "synopsis": "Following the death of publishing tycoon Charles Foster Kane, reporters scramble to uncover the meaning of his final utterance: 'Rosebud.'",
        "directors": [
            "Orson Welles"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "M": {
        "name": "M",
        "boxOffice": "35566",
        "budget": "N/A",
        "cast": [
            "Peter Lorre",
            "Ellen Widmann",
            "Inge Landgut"
        ],
        "countries": [
            "Germany"
        ],
        "duration": "99",
        "genres": [
            "Crime",
            "Mystery",
            "Thriller"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BODA4ODk3OTEzMF5BMl5BanBnXkFtZTgwMTQ2ODMwMzE@._V1_SX300.jpg",
        "releaseDate": "1931-08-31",
        "synopsis": "When the police in a German city are unable to catch a child-murderer, other criminals join in the manhunt.",
        "directors": [
            "Fritz Lang"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Metropolis": {
        "name": "Metropolis",
        "boxOffice": "1236166",
        "budget": "N/A",
        "cast": [
            "Brigitte Helm",
            "Alfred Abel",
            "Gustav Fr\u00f6hlich"
        ],
        "countries": [
            "Germany"
        ],
        "duration": "153",
        "genres": [
            "Drama",
            "Sci-Fi"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BMTg5YWIyMWUtZDY5My00Zjc1LTljOTctYmI0MWRmY2M2NmRkXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
        "releaseDate": "1927-03-13",
        "synopsis": "In a futuristic city sharply divided between the working class and the city planners, the son of the city's mastermind falls in love with a working-class prophet who predicts the coming of a savior to mediate their differences.",
        "directors": [
            "Fritz Lang"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "The Kid": {
        "name": "The Kid",
        "boxOffice": "N/A",
        "budget": "N/A",
        "cast": [
            "Charles Chaplin",
            "Edna Purviance",
            "Jackie Coogan"
        ],
        "countries": [
            "United States"
        ],
        "duration": "68",
        "genres": [
            "Comedy",
            "Drama",
            "Family"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BZjhhMThhNDItNTY2MC00MmU1LTliNDEtNDdhZjdlNTY5ZDQ1XkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg",
        "releaseDate": "1921-02-06",
        "synopsis": "The Tramp cares for an abandoned child, but events put their relationship in jeopardy.",
        "directors": [
            "Charles Chaplin"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "K.G.F: Chapter 2": {
        "name": "K.G.F: Chapter 2",
        "boxOffice": "2874000",
        "budget": "N/A",
        "cast": [
            "Yash",
            "Sanjay Dutt",
            "Raveena Tandon"
        ],
        "countries": [
            "India"
        ],
        "duration": "168",
        "genres": [
            "Action",
            "Crime",
            "Drama"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BMjI2Njg2Y2EtZjgwMC00ZGVkLWJmMWYtYjVhYjk2ZTkwNWE1XkEyXkFqcGdeQXVyMTMxMjA5NDU1._V1_SX300.jpg",
        "releaseDate": "2022-04-13",
        "synopsis": "In the blood-soaked Kolar Gold Fields, Rocky's name strikes fear into his foes. While his allies look up to him, the government sees him as a threat to law and order. Rocky must battle threats from all sides for unchallenged supre...",
        "directors": [
            "Prashanth Neel"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Green Book": {
        "name": "Green Book",
        "boxOffice": "85080171",
        "budget": "N/A",
        "cast": [
            "Viggo Mortensen",
            "Mahershala Ali",
            "Linda Cardellini"
        ],
        "countries": [
            "United States",
            "China"
        ],
        "duration": "130",
        "genres": [
            "Biography",
            "Comedy",
            "Drama"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BYzIzYmJlYTYtNGNiYy00N2EwLTk4ZjItMGYyZTJiOTVkM2RlXkEyXkFqcGdeQXVyODY1NDk1NjE@._V1_SX300.jpg",
        "releaseDate": "2018-11-16",
        "synopsis": "A working-class Italian-American bouncer becomes the driver for an African-American classical pianist on a tour of venues through the 1960s American South.",
        "directors": [
            "Peter Farrelly"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "A Silent Voice": {
        "name": "A Silent Voice",
        "boxOffice": "N/A",
        "budget": "N/A",
        "cast": [
            "N/A"
        ],
        "countries": [
            "Iran"
        ],
        "duration": "3",
        "genres": [
            "Short"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BOGNkNjgzNWYtNjcyOC00Y2Y3LWI5NWUtOGViMDNmNzg4NGM1XkEyXkFqcGdeQXVyNjI0Nzc1NTM@._V1_SX300.jpg",
        "releaseDate": "N/A",
        "synopsis": "A silent voice is for voices that are not heard before! For people who die in silence! And the only voice that they hear is the Fire sound.",
        "directors": [
            "Milad Mohebian"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Three Billboards Outside Ebbing, Missouri": {
        "name": "Three Billboards Outside Ebbing, Missouri",
        "boxOffice": "54513740",
        "budget": "N/A",
        "cast": [
            "Frances McDormand",
            "Woody Harrelson",
            "Sam Rockwell"
        ],
        "countries": [
            "United Kingdom",
            "United States"
        ],
        "duration": "115",
        "genres": [
            "Comedy",
            "Crime",
            "Drama"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BMjI0ODcxNzM1N15BMl5BanBnXkFtZTgwMzIwMTEwNDI@._V1_SX300.jpg",
        "releaseDate": "2017-12-01",
        "synopsis": "A mother personally challenges the local authorities to solve her daughter's murder when they fail to catch the culprit.",
        "directors": [
            "Martin McDonagh"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Talvar": {
        "name": "Talvar",
        "boxOffice": "342370",
        "budget": "N/A",
        "cast": [
            "Irrfan Khan",
            "Konkona Sen Sharma",
            "Neeraj Kabi"
        ],
        "countries": [
            "India"
        ],
        "duration": "132",
        "genres": [
            "Crime",
            "Drama",
            "Mystery"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BMTYzODg0Mjc4M15BMl5BanBnXkFtZTgwNzY4Mzc3NjE@._V1_SX300.jpg",
        "releaseDate": "2015-10-02",
        "synopsis": "An experienced investigator confronts several conflicting theories about the perpetrators of a violent double homicide.",
        "directors": [
            "Meghna Gulzar"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Baahubali 2: The Conclusion": {
        "name": "Baahubali 2: The Conclusion",
        "boxOffice": "20186659",
        "budget": "N/A",
        "cast": [
            "Prabhas",
            "Rana Daggubati",
            "Anushka Shetty"
        ],
        "countries": [
            "India"
        ],
        "duration": "167",
        "genres": [
            "Action",
            "Drama"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BZWM2YzIyNmMtNzFkNS00NmIzLTkzOWItYzVhMGVmNTc2OTVmXkEyXkFqcGdeQXVyNzU3Nzk4MDQ@._V1_SX300.jpg",
        "releaseDate": "2017-04-28",
        "synopsis": "When Shiva, the son of Bahubali, learns about his heritage, he begins to look for answers. His story is juxtaposed with past events that unfolded in the Mahishmati Kingdom.",
        "directors": [
            "S.S. Rajamouli"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Klaus": {
        "name": "Klaus",
        "boxOffice": "N/A",
        "budget": "N/A",
        "cast": [
            "Jason Schwartzman",
            "J.K. Simmons",
            "Rashida Jones"
        ],
        "countries": [
            "Spain",
            "United Kingdom",
            "United States"
        ],
        "duration": "96",
        "genres": [
            "Animation",
            "Adventure",
            "Comedy"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BMWYwOThjM2ItZGYxNy00NTQwLWFlZWEtM2MzM2Q5MmY3NDU5XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
        "releaseDate": "2019-11-15",
        "synopsis": "A simple act of kindness always sparks another, even in a frozen, faraway place. When Smeerensburg's new postman, Jesper, befriends toymaker Klaus, their gifts melt an age-old feud and deliver a sleigh full of holiday traditions.",
        "directors": [
            "Sergio Pablos",
            "Carlos Mart\u00ednez L\u00f3pez"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Queen": {
        "name": "Queen",
        "boxOffice": "N/A",
        "budget": "N/A",
        "cast": [
            "Kangana Ranaut",
            "Rajkummar Rao",
            "Lisa Haydon"
        ],
        "countries": [
            "India"
        ],
        "duration": "146",
        "genres": [
            "Adventure",
            "Comedy",
            "Drama"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BNWYyOWRlOWItZWM5MS00ZjJkLWI0MTUtYTE3NTI5MDAwYjgyXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
        "releaseDate": "2014-03-07",
        "synopsis": "A Delhi girl from a traditional family sets out on a solo honeymoon after her marriage gets cancelled.",
        "directors": [
            "Vikas Bahl"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Tangerines": {
        "name": "Tangerines",
        "boxOffice": "144501",
        "budget": "N/A",
        "cast": [
            "Lembit Ulfsak",
            "Elmo N\u00fcganen",
            "Giorgi Nakashidze"
        ],
        "countries": [
            "Estonia",
            "Georgia"
        ],
        "duration": "87",
        "genres": [
            "Drama",
            "War"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BMTgwNzA3MDQzOV5BMl5BanBnXkFtZTgwNTE5MDE5NDE@._V1_SX300.jpg",
        "releaseDate": "2015-04-17",
        "synopsis": "In 1992, war rages in Abkhazia, a breakaway region of Georgia. An Estonian man Ivo has decided to stay behind and harvest his crops of tangerines. In a bloody conflict at his door, a wounded man is left behind, and Ivo takes him in.",
        "directors": [
            "Zaza Urushadze"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Bhaag Milkha Bhaag": {
        "name": "Bhaag Milkha Bhaag",
        "boxOffice": "1636731",
        "budget": "N/A",
        "cast": [
            "Farhan Akhtar",
            "Japtej Singh",
            "Divya Dutta"
        ],
        "countries": [
            "India"
        ],
        "duration": "186",
        "genres": [
            "Biography",
            "Drama",
            "Sport"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BMTY1Nzg4MjcwN15BMl5BanBnXkFtZTcwOTc1NTk1OQ@@._V1_SX300.jpg",
        "releaseDate": "2013-07-12",
        "synopsis": "The truth behind the ascension of Milkha Singh, who was scarred by of the India-Pakistan partition.",
        "directors": [
            "Rakeysh Omprakash Mehra"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Gangs of Wasseypur": {
        "name": "Gangs of Wasseypur",
        "boxOffice": "N/A",
        "budget": "N/A",
        "cast": [
            "Manoj Bajpayee",
            "Nawazuddin Siddiqui",
            "Tigmanshu Dhulia"
        ],
        "countries": [
            "India"
        ],
        "duration": "321",
        "genres": [
            "Action",
            "Comedy",
            "Crime"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BMTc5NjY4MjUwNF5BMl5BanBnXkFtZTgwODM3NzM5MzE@._V1_SX300.jpg",
        "releaseDate": "2012-06-22",
        "synopsis": "A clash between Sultan and Shahid Khan leads to the expulsion of Khan from Wasseypur, and ignites a deadly blood feud spanning three generations.",
        "directors": [
            "Anurag Kashyap"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Udaan": {
        "name": "Udaan",
        "boxOffice": "7461",
        "budget": "N/A",
        "cast": [
            "Rajat Barmecha",
            "Ronit Roy",
            "Manjot Singh"
        ],
        "countries": [
            "India"
        ],
        "duration": "134",
        "genres": [
            "Drama"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BNzgxMzExMzUwNV5BMl5BanBnXkFtZTcwMDc2MjUwNA@@._V1_SX300.jpg",
        "releaseDate": "2010-07-16",
        "synopsis": "Expelled from his school, a 16-year old boy returns home to his abusive and oppressive father.",
        "directors": [
            "Vikramaditya Motwane"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Paan Singh Tomar": {
        "name": "Paan Singh Tomar",
        "boxOffice": "40311",
        "budget": "N/A",
        "cast": [
            "Irrfan Khan",
            "Mahie Gill",
            "Rajesh Abhay"
        ],
        "countries": [
            "India"
        ],
        "duration": "135",
        "genres": [
            "Action",
            "Biography",
            "Crime"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BNTgwODM5OTMzN15BMl5BanBnXkFtZTcwMTA3NzI1Nw@@._V1_SX300.jpg",
        "releaseDate": "2012-03-02",
        "synopsis": "The story of Paan Singh Tomar, an Indian athlete and seven-time national steeplechase champion who becomes one of the most feared dacoits in Chambal Valley after his retirement.",
        "directors": [
            "Tigmanshu Dhulia"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "The Secret in Their Eyes": {
        "name": "The Secret in Their Eyes",
        "boxOffice": "6391436",
        "budget": "N/A",
        "cast": [
            "Ricardo Dar\u00edn",
            "Soledad Villamil",
            "Pablo Rago"
        ],
        "countries": [
            "Argentina",
            "Spain"
        ],
        "duration": "129",
        "genres": [
            "Drama",
            "Mystery",
            "Romance"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BY2FhZGI5M2QtZWFiZS00NjkwLWE4NWQtMzg3ZDZjNjdkYTJiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
        "releaseDate": "2010-05-21",
        "synopsis": "A retired legal counselor writes a novel hoping to find closure for one of his past unresolved homicide cases and for his unreciprocated love with his superior - both of which still haunt him decades later.",
        "directors": [
            "Juan Jos\u00e9 Campanella"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Warrior": {
        "name": "Warrior",
        "boxOffice": "13657115",
        "budget": "N/A",
        "cast": [
            "Tom Hardy",
            "Nick Nolte",
            "Joel Edgerton"
        ],
        "countries": [
            "United States"
        ],
        "duration": "140",
        "genres": [
            "Action",
            "Drama",
            "Sport"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BMTk4ODk5MTMyNV5BMl5BanBnXkFtZTcwMDMyNTg0Ng@@._V1_SX300.jpg",
        "releaseDate": "2011-09-09",
        "synopsis": "The youngest son of an alcoholic former boxer returns home, where he's trained by his father for competition in a mixed martial arts tournament - a path that puts the fighter on a collision course with his estranged, older brother.",
        "directors": [
            "Gavin O'Connor"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Up": {
        "name": "Up",
        "boxOffice": "293004164",
        "budget": "N/A",
        "cast": [
            "Edward Asner",
            "Jordan Nagai",
            "John Ratzenberger"
        ],
        "countries": [
            "United States",
            "Japan"
        ],
        "duration": "96",
        "genres": [
            "Animation",
            "Adventure",
            "Comedy"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BYjBkM2RjMzItM2M3Ni00N2NjLWE3NzMtMGY4MzE4MDAzMTRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
        "releaseDate": "2009-05-29",
        "synopsis": "78-year-old Carl Fredricksen travels to Paradise Falls in his house equipped with balloons, inadvertently taking a young stowaway.",
        "directors": [
            "Pete Docter",
            "Bob Peterson"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "The Wolf of Wall Street": {
        "name": "The Wolf of Wall Street",
        "boxOffice": "116900694",
        "budget": "N/A",
        "cast": [
            "Leonardo DiCaprio",
            "Jonah Hill",
            "Margot Robbie"
        ],
        "countries": [
            "United States"
        ],
        "duration": "180",
        "genres": [
            "Biography",
            "Comedy",
            "Crime"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BMjIxMjgxNTk0MF5BMl5BanBnXkFtZTgwNjIyOTg2MDE@._V1_SX300.jpg",
        "releaseDate": "2013-12-25",
        "synopsis": "Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker living the high life to his fall involving crime, corruption and the federal government.",
        "directors": [
            "Martin Scorsese"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "There Will Be Blood": {
        "name": "There Will Be Blood",
        "boxOffice": "40222514",
        "budget": "N/A",
        "cast": [
            "Daniel Day-Lewis",
            "Paul Dano",
            "Ciar\u00e1n Hinds"
        ],
        "countries": [
            "United States"
        ],
        "duration": "158",
        "genres": [
            "Drama"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BMjAxODQ4MDU5NV5BMl5BanBnXkFtZTcwMDU4MjU1MQ@@._V1_SX300.jpg",
        "releaseDate": "2008-01-25",
        "synopsis": "A story of family, religion, hatred, oil and madness, focusing on a turn-of-the-century prospector in the early days of the business.",
        "directors": [
            "Paul Thomas Anderson"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Pan's Labyrinth": {
        "name": "Pan's Labyrinth",
        "boxOffice": "37646380",
        "budget": "N/A",
        "cast": [
            "Ivana Baquero",
            "Ariadna Gil",
            "Sergi L\u00f3pez"
        ],
        "countries": [
            "Mexico",
            "Spain"
        ],
        "duration": "118",
        "genres": [
            "Drama",
            "Fantasy",
            "War"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BYzFjMThiMGItOWRlMC00MDI4LThmOGUtYTNlZGZiYWI1YjMyXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg",
        "releaseDate": "2007-01-19",
        "synopsis": "In the Falangist Spain of 1944, the bookish young stepdaughter of a sadistic army officer escapes into an eerie but captivating fantasy world.",
        "directors": [
            "Guillermo del Toro"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "V for Vendetta": {
        "name": "V for Vendetta",
        "boxOffice": "70511035",
        "budget": "N/A",
        "cast": [
            "Hugo Weaving",
            "Natalie Portman",
            "Rupert Graves"
        ],
        "countries": [
            "United States",
            "United Kingdom",
            "Germany"
        ],
        "duration": "132",
        "genres": [
            "Action",
            "Drama",
            "Sci-Fi"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BOTI5ODc3NzExNV5BMl5BanBnXkFtZTcwNzYxNzQzMw@@._V1_SX300.jpg",
        "releaseDate": "2006-03-17",
        "synopsis": "In a future British dystopian society, a shadowy freedom fighter, known only by the alias of \"V\", plots to overthrow the tyrannical government - with the help of a young woman.",
        "directors": [
            "James McTeigue"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Rang De Basanti": {
        "name": "Rang De Basanti",
        "boxOffice": "2197694",
        "budget": "N/A",
        "cast": [
            "Aamir Khan",
            "Soha Ali Khan",
            "Siddharth"
        ],
        "countries": [
            "India"
        ],
        "duration": "167",
        "genres": [
            "Comedy",
            "Crime",
            "Drama"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BYThmZDA0YmQtMWJhNy00MDQwLTk0Y2YtMDhmZTE5ZjhlNjliXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
        "releaseDate": "2006-01-26",
        "synopsis": "The story of six young Indians who assist an English woman to film a documentary on the freedom fighters from their past, and the events that lead them to relive the long-forgotten saga of freedom.",
        "directors": [
            "Rakeysh Omprakash Mehra"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Black": {
        "name": "Black",
        "boxOffice": "754819",
        "budget": "N/A",
        "cast": [
            "Amitabh Bachchan",
            "Rani Mukerji",
            "Shernaz Patel"
        ],
        "countries": [
            "India"
        ],
        "duration": "122",
        "genres": [
            "Drama"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BNTI5MmE5M2UtZjIzYS00M2JjLWIwNDItYTY2ZWNiODBmYTBiXkEyXkFqcGdeQXVyNjQ2MjQ5NzM@._V1_SX300.jpg",
        "releaseDate": "2005-02-04",
        "synopsis": "The cathartic tale of a young woman who can't see, hear, or speak, and the teacher who brings a ray of light into her dark world.",
        "directors": [
            "Sanjay Leela Bhansali"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Batman Begins": {
        "name": "Batman Begins",
        "boxOffice": "206863479",
        "budget": "N/A",
        "cast": [
            "Christian Bale",
            "Michael Caine",
            "Ken Watanabe"
        ],
        "countries": [
            "United States",
            "United Kingdom"
        ],
        "duration": "140",
        "genres": [
            "Action",
            "Crime",
            "Drama"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
        "releaseDate": "2005-06-15",
        "synopsis": "After witnessing his parents' death, Bruce learns the art of fighting to confront injustice. When he returns to Gotham as Batman, he must stop a secret society that intends to destroy the city.",
        "directors": [
            "Christopher Nolan"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Downfall": {
        "name": "Downfall",
        "boxOffice": "5509040",
        "budget": "N/A",
        "cast": [
            "Bruno Ganz",
            "Alexandra Maria Lara",
            "Ulrich Matthes"
        ],
        "countries": [
            "Germany",
            "Austria",
            "Italy"
        ],
        "duration": "156",
        "genres": [
            "Biography",
            "Drama",
            "History"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BMTU0NTU5NTAyMl5BMl5BanBnXkFtZTYwNzYwMDg2._V1_SX300.jpg",
        "releaseDate": "2005-04-08",
        "synopsis": "Traudl Junge, the final secretary for Adolf Hitler, tells of the Nazi dictator's final days in his Berlin bunker at the end of WWII.",
        "directors": [
            "Oliver Hirschbiegel"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Howl's Moving Castle": {
        "name": "Howl's Moving Castle",
        "boxOffice": "6789268",
        "budget": "N/A",
        "cast": [
            "Chieko Baish\u00f4",
            "Takuya Kimura",
            "Tatsuya Gash\u00fbin"
        ],
        "countries": [
            "Japan"
        ],
        "duration": "119",
        "genres": [
            "Animation",
            "Adventure",
            "Family"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BNmM4YTFmMmItMGE3Yy00MmRkLTlmZGEtMzZlOTQzYjk3MzA2XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
        "releaseDate": "2005-06-17",
        "synopsis": "When an unconfident young woman is cursed with an old body by a spiteful witch, her only chance of breaking the spell lies with a self-indulgent yet insecure young wizard and his companions in his legged, walking castle.",
        "directors": [
            "Hayao Miyazaki"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "A Beautiful Mind": {
        "name": "A Beautiful Mind",
        "boxOffice": "170742341",
        "budget": "N/A",
        "cast": [
            "Russell Crowe",
            "Ed Harris",
            "Jennifer Connelly"
        ],
        "countries": [
            "United States"
        ],
        "duration": "135",
        "genres": [
            "Biography",
            "Drama"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BMzcwYWFkYzktZjAzNC00OGY1LWI4YTgtNzc5MzVjMDVmNjY0XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
        "releaseDate": "2002-01-04",
        "synopsis": "After John Nash, a brilliant but asocial mathematician, accepts secret work in cryptography, his life takes a turn for the nightmarish.",
        "directors": [
            "Ron Howard"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Hera Pheri": {
        "name": "Hera Pheri",
        "boxOffice": "N/A",
        "budget": "N/A",
        "cast": [
            "Akshay Kumar",
            "Suniel Shetty",
            "Paresh Rawal"
        ],
        "countries": [
            "India"
        ],
        "duration": "156",
        "genres": [
            "Action",
            "Comedy",
            "Crime"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BNDExMTBlZTYtZWMzYi00NmEwLWEzZGYtOTA1MDhmNTc0ODZkXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
        "releaseDate": "2000-03-31",
        "synopsis": "Three unemployed men look for answers to all their money problems - but when their opportunity arrives, will they know what to do with it?",
        "directors": [
            "Priyadarshan"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Lock, Stock and Two Smoking Barrels": {
        "name": "Lock, Stock and Two Smoking Barrels",
        "boxOffice": "3753929",
        "budget": "N/A",
        "cast": [
            "Jason Flemyng",
            "Dexter Fletcher",
            "Nick Moran"
        ],
        "countries": [
            "United Kingdom"
        ],
        "duration": "107",
        "genres": [
            "Action",
            "Comedy",
            "Crime"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BMTAyN2JmZmEtNjAyMy00NzYwLThmY2MtYWQ3OGNhNjExMmM4XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
        "releaseDate": "1998-08-28",
        "synopsis": "Eddy persuades his three pals to pool money for a vital poker game against a powerful local mobster, Hatchet Harry. Eddy loses, after which Harry gives him a week to pay back 500,000 pounds.",
        "directors": [
            "Guy Ritchie"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "L.A. Confidential": {
        "name": "L.A. Confidential",
        "boxOffice": "64616940",
        "budget": "N/A",
        "cast": [
            "Kevin Spacey",
            "Russell Crowe",
            "Guy Pearce"
        ],
        "countries": [
            "United States"
        ],
        "duration": "138",
        "genres": [
            "Crime",
            "Drama",
            "Mystery"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BMDQ2YzEyZGItYWRhOS00MjBmLTkzMDUtMTdjYzkyMmQxZTJlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
        "releaseDate": "1997-09-19",
        "synopsis": "As corruption grows in 1950s Los Angeles, three policemen - one strait-laced, one brutal, and one sleazy - investigate a series of murders with their own brand of justice.",
        "directors": [
            "Curtis Hanson"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Heat": {
        "name": "Heat",
        "boxOffice": "67436818",
        "budget": "N/A",
        "cast": [
            "Al Pacino",
            "Robert De Niro",
            "Val Kilmer"
        ],
        "countries": [
            "United States"
        ],
        "duration": "170",
        "genres": [
            "Action",
            "Crime",
            "Drama"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BYjZjNTJlZGUtZTE1Ny00ZDc4LTgwYjUtMzk0NDgwYzZjYTk1XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
        "releaseDate": "1995-12-15",
        "synopsis": "A group of high-end professional thieves start to feel the heat from the LAPD when they unknowingly leave a clue at their latest heist.",
        "directors": [
            "Michael Mann"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Casino": {
        "name": "Casino",
        "boxOffice": "42512375",
        "budget": "N/A",
        "cast": [
            "Robert De Niro",
            "Sharon Stone",
            "Joe Pesci"
        ],
        "countries": [
            "United States",
            "France"
        ],
        "duration": "178",
        "genres": [
            "Crime",
            "Drama"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BMTcxOWYzNDYtYmM4YS00N2NkLTk0NTAtNjg1ODgwZjAxYzI3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg",
        "releaseDate": "1995-11-22",
        "synopsis": "A tale of greed, deception, money, power, and murder occur between two best friends: a mafia enforcer and a casino executive compete against each other over a gambling empire, and over a fast-living and fast-loving socialite.",
        "directors": [
            "Martin Scorsese"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Andaz Apna Apna": {
        "name": "Andaz Apna Apna",
        "boxOffice": "N/A",
        "budget": "N/A",
        "cast": [
            "Aamir Khan",
            "Salman Khan",
            "Raveena Tandon"
        ],
        "countries": [
            "India"
        ],
        "duration": "160",
        "genres": [
            "Action",
            "Comedy",
            "Romance"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BNGVkODBlYmUtNTMzYi00MjEwLWI3YWUtODNlNjhkMTg4OWJiXkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_SX300.jpg",
        "releaseDate": "1994-11-04",
        "synopsis": "Two slackers competing for the affections of an heiress inadvertently become her protectors from an evil criminal.",
        "directors": [
            "Rajkumar Santoshi"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Unforgiven": {
        "name": "Unforgiven",
        "boxOffice": "101167799",
        "budget": "N/A",
        "cast": [
            "Clint Eastwood",
            "Gene Hackman",
            "Morgan Freeman"
        ],
        "countries": [
            "United States"
        ],
        "duration": "130",
        "genres": [
            "Drama",
            "Western"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BODM3YWY4NmQtN2Y3Ni00OTg0LWFhZGQtZWE3ZWY4MTJlOWU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
        "releaseDate": "1992-08-07",
        "synopsis": "Retired Old West gunslinger William Munny reluctantly takes on one last job, with the help of his old partner Ned Logan and a young man, The \"Schofield Kid.\"",
        "directors": [
            "Clint Eastwood"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Indiana Jones and the Last Crusade": {
        "name": "Indiana Jones and the Last Crusade",
        "boxOffice": "197171806",
        "budget": "N/A",
        "cast": [
            "Harrison Ford",
            "Sean Connery",
            "Alison Doody"
        ],
        "countries": [
            "United States"
        ],
        "duration": "127",
        "genres": [
            "Action",
            "Adventure"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BY2Q0ODg4ZmItNDZiYi00ZWY5LTg2NzctNmYwZjA5OThmNzE1XkEyXkFqcGdeQXVyMjM4MzQ4OTQ@._V1_SX300.jpg",
        "releaseDate": "1989-05-24",
        "synopsis": "In 1938, after his father goes missing while pursuing the Holy Grail, Indiana Jones finds himself up against the Nazis again to stop them from obtaining its powers.",
        "directors": [
            "Steven Spielberg"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Die Hard": {
        "name": "Die Hard",
        "boxOffice": "83844093",
        "budget": "N/A",
        "cast": [
            "Bruce Willis",
            "Alan Rickman",
            "Bonnie Bedelia"
        ],
        "countries": [
            "United States"
        ],
        "duration": "132",
        "genres": [
            "Action",
            "Thriller"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BZjRlNDUxZjAtOGQ4OC00OTNlLTgxNmQtYTBmMDgwZmNmNjkxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
        "releaseDate": "1988-07-20",
        "synopsis": "A New York City police officer tries to save his estranged wife and several others taken hostage by terrorists during a Christmas party at the Nakatomi Plaza in Los Angeles.",
        "directors": [
            "John McTiernan"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Ran": {
        "name": "Ran",
        "boxOffice": "4135750",
        "budget": "N/A",
        "cast": [
            "Tatsuya Nakadai",
            "Akira Terao",
            "Jinpachi Nezu"
        ],
        "countries": [
            "Japan",
            "France"
        ],
        "duration": "162",
        "genres": [
            "Action",
            "Drama",
            "War"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BMmU1NGYwZWYtOWExNi00ZTEyLTgwMmUtM2ZlMDVjNWM4YjVlXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg",
        "releaseDate": "1985-06-01",
        "synopsis": "In Medieval Japan, an elderly warlord retires, handing over his empire to his three sons. However, he vastly underestimates how the new-found power will corrupt them and cause them to turn on each other...and him.",
        "directors": [
            "Akira Kurosawa"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Raging Bull": {
        "name": "Raging Bull",
        "boxOffice": "23383987",
        "budget": "N/A",
        "cast": [
            "Robert De Niro",
            "Cathy Moriarty",
            "Joe Pesci"
        ],
        "countries": [
            "United States"
        ],
        "duration": "129",
        "genres": [
            "Biography",
            "Drama",
            "Sport"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BYjRmODkzNDItMTNhNi00YjJlLTg0ZjAtODlhZTM0YzgzYThlXkEyXkFqcGdeQXVyNzQ1ODk3MTQ@._V1_SX300.jpg",
        "releaseDate": "1980-12-19",
        "synopsis": "The life of boxer Jake LaMotta, whose violence and temper that led him to the top in the ring destroyed his life outside of it.",
        "directors": [
            "Martin Scorsese"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Stalker": {
        "name": "Stalker",
        "boxOffice": "292049",
        "budget": "N/A",
        "cast": [
            "Alisa Freyndlikh",
            "Aleksandr Kaydanovskiy",
            "Anatoliy Solonitsyn"
        ],
        "countries": [
            "Soviet Union"
        ],
        "duration": "162",
        "genres": [
            "Drama",
            "Sci-Fi"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BMDgwODNmMGItMDcwYi00OWZjLTgyZjAtMGYwMmI4N2Q0NmJmXkEyXkFqcGdeQXVyNzY1MTU0Njk@._V1_SX300.jpg",
        "releaseDate": "1980-04-17",
        "synopsis": "A guide leads two men through an area known as the Zone to find a room that grants wishes.",
        "directors": [
            "Andrei Tarkovsky"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "The Message": {
        "name": "The Message",
        "boxOffice": "N/A",
        "budget": "N/A",
        "cast": [
            "Anthony Quinn",
            "Irene Papas",
            "Michael Ansara"
        ],
        "countries": [
            "Lebanon",
            "Libya",
            "Kuwait",
            "Morocco",
            "United Kingdom",
            "Egypt"
        ],
        "duration": "177",
        "genres": [
            "Biography",
            "Drama",
            "History"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BMjk3YjJmYTctMTAzZC00MzE4LWFlZGMtNDM5OTMyMDEzZWIxXkEyXkFqcGdeQXVyNTI4MjkwNjA@._V1_SX300.jpg",
        "releaseDate": "1977-01-31",
        "synopsis": "This epic historical drama chronicles the life and times of Prophet Muhammad and serves as an introduction to early Islamic history.",
        "directors": [
            "Moustapha Akkad"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Sholay": {
        "name": "Sholay",
        "boxOffice": "N/A",
        "budget": "N/A",
        "cast": [
            "Sanjeev Kumar",
            "Dharmendra",
            "Amitabh Bachchan"
        ],
        "countries": [
            "India"
        ],
        "duration": "162",
        "genres": [
            "Action",
            "Adventure",
            "Comedy"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BOWQ0YTUzYzItYjI0MC00OTZmLWE1MWQtY2EzMzU2MTlmMmJjXkEyXkFqcGdeQXVyMDkwNTkwNg@@._V1_SX300.jpg",
        "releaseDate": "1975-08-15",
        "synopsis": "After his family is murdered by a notorious and ruthless bandit, a former police officer enlists the services of two outlaws to capture the bandit.",
        "directors": [
            "Ramesh Sippy"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Monty Python and the Holy Grail": {
        "name": "Monty Python and the Holy Grail",
        "boxOffice": "1827696",
        "budget": "N/A",
        "cast": [
            "Graham Chapman",
            "John Cleese",
            "Eric Idle"
        ],
        "countries": [
            "United Kingdom"
        ],
        "duration": "91",
        "genres": [
            "Adventure",
            "Comedy",
            "Fantasy"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BN2IyNTE4YzUtZWU0Mi00MGIwLTgyMmQtMzQ4YzQxYWNlYWE2XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
        "releaseDate": "1975-05-25",
        "synopsis": "King Arthur and his Knights of the Round Table embark on a surreal, low-budget search for the Holy Grail, encountering many, very silly obstacles.",
        "directors": [
            "Terry Gilliam",
            "Terry Jones"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Chinatown": {
        "name": "Chinatown",
        "boxOffice": "29200000",
        "budget": "N/A",
        "cast": [
            "Jack Nicholson",
            "Faye Dunaway",
            "John Huston"
        ],
        "countries": [
            "United States"
        ],
        "duration": "130",
        "genres": [
            "Drama",
            "Mystery",
            "Thriller"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BMjJkMDZhYzItZTFhMi00ZGI4LThlNTAtZDNlYmEwNjFkNDYzXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg",
        "releaseDate": "1974-06-20",
        "synopsis": "A private detective hired to expose an adulterer in 1930s Los Angeles finds himself caught up in a web of deceit, corruption, and murder.",
        "directors": [
            "Roman Polanski"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "The Great Escape": {
        "name": "The Great Escape",
        "boxOffice": "N/A",
        "budget": "N/A",
        "cast": [
            "Steve McQueen",
            "James Garner",
            "Richard Attenborough"
        ],
        "countries": [
            "United States"
        ],
        "duration": "172",
        "genres": [
            "Adventure",
            "Drama",
            "History"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BNzA2NmYxMWUtNzBlMC00MWM2LTkwNmQtYTFlZjQwODNhOWE0XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg",
        "releaseDate": "1963-07-04",
        "synopsis": "Allied prisoners of war plan for several hundred of their number to escape from a German camp during World War II.",
        "directors": [
            "John Sturges"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "To Kill a Mockingbird": {
        "name": "To Kill a Mockingbird",
        "boxOffice": "592237",
        "budget": "N/A",
        "cast": [
            "Gregory Peck",
            "John Megna",
            "Frank Overton"
        ],
        "countries": [
            "United States"
        ],
        "duration": "129",
        "genres": [
            "Crime",
            "Drama"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BNmVmYzcwNzMtMWM1NS00MWIyLThlMDEtYzUwZDgzODE1NmE2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
        "releaseDate": "1963-03-16",
        "synopsis": "Atticus Finch, a widowed lawyer in Depression-era Alabama, defends a Black man against an undeserved rape charge, and tries to educate his young children against prejudice.",
        "directors": [
            "Robert Mulligan"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Yojimbo": {
        "name": "Yojimbo",
        "boxOffice": "46808",
        "budget": "N/A",
        "cast": [
            "Toshir\u00f4 Mifune",
            "Eijir\u00f4 T\u00f4no",
            "Tatsuya Nakadai"
        ],
        "countries": [
            "Japan"
        ],
        "duration": "110",
        "genres": [
            "Action",
            "Drama",
            "Thriller"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BZThiZjAzZjgtNDU3MC00YThhLThjYWUtZGRkYjc2ZWZlOTVjXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg",
        "releaseDate": "1961-09-13",
        "synopsis": "A crafty ronin comes to a town divided by two criminal gangs and decides to play them against each other to free the town.",
        "directors": [
            "Akira Kurosawa"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Judgment at Nuremberg": {
        "name": "Judgment at Nuremberg",
        "boxOffice": "N/A",
        "budget": "N/A",
        "cast": [
            "Spencer Tracy",
            "Burt Lancaster",
            "Richard Widmark"
        ],
        "countries": [
            "United States"
        ],
        "duration": "179",
        "genres": [
            "Drama",
            "War"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BNDc2ODQ5NTE2MV5BMl5BanBnXkFtZTcwODExMjUyNA@@._V1_SX300.jpg",
        "releaseDate": "1961-12-18",
        "synopsis": "In 1948, an American court in occupied Germany tries four Nazis judged for war crimes.",
        "directors": [
            "Stanley Kramer"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Some Like It Hot": {
        "name": "Some Like It Hot",
        "boxOffice": "N/A",
        "budget": "N/A",
        "cast": [
            "Marilyn Monroe",
            "Tony Curtis",
            "Jack Lemmon"
        ],
        "countries": [
            "United States"
        ],
        "duration": "121",
        "genres": [
            "Comedy",
            "Music",
            "Romance"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BNzAyOGIxYjAtMGY2NC00ZTgyLWIwMWEtYzY0OWQ4NDFjOTc5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
        "releaseDate": "1959-03-19",
        "synopsis": "After two male musicians witness a mob hit, they flee the state in an all-female band disguised as women, but further complications set in.",
        "directors": [
            "Billy Wilder"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Wild Strawberries": {
        "name": "Wild Strawberries",
        "boxOffice": "N/A",
        "budget": "N/A",
        "cast": [
            "Victor Sj\u00f6str\u00f6m",
            "Bibi Andersson",
            "Ingrid Thulin"
        ],
        "countries": [
            "Sweden"
        ],
        "duration": "91",
        "genres": [
            "Drama",
            "Romance"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BYWQxYzdhMDMtNjAyZC00NzE0LWFjYmQtYjk0YzMyYjA5NzZkXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg",
        "releaseDate": "1959-06-22",
        "synopsis": "After living a life marked by coldness, an aging professor is forced to confront the emptiness of his existence.",
        "directors": [
            "Ingmar Bergman"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "The Seventh Seal": {
        "name": "The Seventh Seal",
        "boxOffice": "N/A",
        "budget": "N/A",
        "cast": [
            "Max von Sydow",
            "Gunnar Bj\u00f6rnstrand",
            "Bengt Ekerot"
        ],
        "countries": [
            "Sweden"
        ],
        "duration": "96",
        "genres": [
            "Drama",
            "Fantasy"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BOWM3MmE0OGYtOGVlNC00OWE1LTk5ZTAtYmUwMDIwM2ZlNWJiXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg",
        "releaseDate": "1958-10-13",
        "synopsis": "A knight returning to Sweden after the Crusades seeks answers about life, death, and the existence of God as he plays chess against the Grim Reaper during the Black Plague.",
        "directors": [
            "Ingmar Bergman"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Rififi": {
        "name": "Rififi",
        "boxOffice": "517975",
        "budget": "N/A",
        "cast": [
            "Jean Servais",
            "Carl M\u00f6hner",
            "Robert Manuel"
        ],
        "countries": [
            "France"
        ],
        "duration": "118",
        "genres": [
            "Crime",
            "Drama",
            "Thriller"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BNjk1NjBkN2ItZTI1Yi00NDcyLTkwN2ItZGQ3MWU1NzU0NjYwXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg",
        "releaseDate": "1956-06-05",
        "synopsis": "Four men plan a technically perfect crime, but the human element intervenes...",
        "directors": [
            "Jules Dassin"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Dial M for Murder": {
        "name": "Dial M for Murder",
        "boxOffice": "24845",
        "budget": "N/A",
        "cast": [
            "Ray Milland",
            "Grace Kelly",
            "Robert Cummings"
        ],
        "countries": [
            "United States"
        ],
        "duration": "105",
        "genres": [
            "Crime",
            "Thriller"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BOWIwODIxYWItZDI4MS00YzhhLWE3MmYtMzlhZDIwOTMzZmE5L2ltYWdlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg",
        "releaseDate": "1954-05-29",
        "synopsis": "A former tennis star arranges the murder of his adulterous wife.",
        "directors": [
            "Alfred Hitchcock"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Tokyo Story": {
        "name": "Tokyo Story",
        "boxOffice": "N/A",
        "budget": "N/A",
        "cast": [
            "Chish\u00fb Ry\u00fb",
            "Chieko Higashiyama",
            "S\u00f4 Yamamura"
        ],
        "countries": [
            "Japan"
        ],
        "duration": "136",
        "genres": [
            "Drama"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BYWQ4ZTRiODktNjAzZC00Nzg1LTk1YWQtNDFmNDI0NmZiNGIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
        "releaseDate": "1972-03-13",
        "synopsis": "An old couple visit their children and grandchildren in the city, but receive little attention.",
        "directors": [
            "Yasujir\u00f4 Ozu"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Rashomon": {
        "name": "Rashomon",
        "boxOffice": "46808",
        "budget": "N/A",
        "cast": [
            "Toshir\u00f4 Mifune",
            "Machiko Ky\u00f4",
            "Masayuki Mori"
        ],
        "countries": [
            "Japan"
        ],
        "duration": "88",
        "genres": [
            "Crime",
            "Drama",
            "Mystery"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BMTk1MDU5MjQ5NF5BMl5BanBnXkFtZTgwMDM2OTE4MzE@._V1_SX300.jpg",
        "releaseDate": "1951-12-26",
        "synopsis": "The rape of a bride and the murder of her samurai husband are recalled from the perspectives of a bandit, the bride, the samurai's ghost and a woodcutter.",
        "directors": [
            "Akira Kurosawa"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "All About Eve": {
        "name": "All About Eve",
        "boxOffice": "63463",
        "budget": "N/A",
        "cast": [
            "Bette Davis",
            "Anne Baxter",
            "George Sanders"
        ],
        "countries": [
            "United States"
        ],
        "duration": "138",
        "genres": [
            "Drama"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BMTY2MTAzODI5NV5BMl5BanBnXkFtZTgwMjM4NzQ0MjE@._V1_SX300.jpg",
        "releaseDate": "1950-10-27",
        "synopsis": "A seemingly timid but secretly ruthless ing\u00e9nue insinuates herself into the lives of an aging Broadway star and her circle of theater friends.",
        "directors": [
            "Joseph L. Mankiewicz"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "The Treasure of the Sierra Madre": {
        "name": "The Treasure of the Sierra Madre",
        "boxOffice": "5014000",
        "budget": "N/A",
        "cast": [
            "Humphrey Bogart",
            "Walter Huston",
            "Tim Holt"
        ],
        "countries": [
            "United States"
        ],
        "duration": "126",
        "genres": [
            "Adventure",
            "Drama",
            "Western"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BOTJlZWMxYzEtMjlkMS00ODE0LThlM2ItMDI3NGQ2YjhmMzkxXkEyXkFqcGdeQXVyMDI2NDg0NQ@@._V1_SX300.jpg",
        "releaseDate": "1948-01-24",
        "synopsis": "Two down-on-their-luck Americans searching for work in 1920s Mexico convince an old prospector to help them mine for gold in the Sierra Madre Mountains.",
        "directors": [
            "John Huston"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "To Be or Not to Be": {
        "name": "To Be or Not to Be",
        "boxOffice": "3270000",
        "budget": "N/A",
        "cast": [
            "Carole Lombard",
            "Jack Benny",
            "Robert Stack"
        ],
        "countries": [
            "United States"
        ],
        "duration": "99",
        "genres": [
            "Comedy",
            "Romance",
            "War"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BMGY3ZDgzY2MtNTllNi00ZWI1LTk1NTUtNWEzN2Q4YTA1ZGZiXkEyXkFqcGdeQXVyNzI1NzMxNzM@._V1_SX300.jpg",
        "releaseDate": "1942-03-06",
        "synopsis": "During the Nazi occupation of Poland, an acting troupe becomes embroiled in a Polish soldier's efforts to track down a German spy.",
        "directors": [
            "Ernst Lubitsch"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "The Circus": {
        "name": "The Circus",
        "boxOffice": "N/A",
        "budget": "N/A",
        "cast": [
            "Charles Chaplin",
            "Merna Kennedy",
            "Al Ernest Garcia"
        ],
        "countries": [
            "United States"
        ],
        "duration": "72",
        "genres": [
            "Comedy",
            "Family",
            "Romance"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BZDc4NjE1M2EtNWVjNi00NDRkLTg5MzctNzJhMGQ4Yjc5YzcyXkEyXkFqcGdeQXVyMDI2NDg0NQ@@._V1_SX300.jpg",
        "releaseDate": "1928-11-16",
        "synopsis": "The Tramp finds work and the girl of his dreams at a circus.",
        "directors": [
            "Charles Chaplin"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "The Gold Rush": {
        "name": "The Gold Rush",
        "boxOffice": "N/A",
        "budget": "N/A",
        "cast": [
            "Charles Chaplin",
            "Mack Swain",
            "Tom Murray"
        ],
        "countries": [
            "United States"
        ],
        "duration": "95",
        "genres": [
            "Adventure",
            "Comedy",
            "Drama"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BODI0NTFkMTItOTYyNC00MzQ4LTgzZWMtMzdhMDAyOWU5YjA5XkEyXkFqcGdeQXVyNzQ1ODk3MTQ@._V1_SX300.jpg",
        "releaseDate": "1925-07-13",
        "synopsis": "A prospector goes to the Klondike during the 1890s gold rush in hopes of making his fortune, and is smitten with a girl he sees in a dance hall.",
        "directors": [
            "Charles Chaplin"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Sherlock Jr.": {
        "name": "Sherlock Jr.",
        "boxOffice": "977375",
        "budget": "N/A",
        "cast": [
            "Buster Keaton",
            "Kathryn McGuire",
            "Joe Keaton"
        ],
        "countries": [
            "United States"
        ],
        "duration": "45",
        "genres": [
            "Action",
            "Comedy",
            "Romance"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BZWFhOGU5NDctY2Q3YS00Y2VlLWI1NzEtZmIwY2ZiZjY4OTA2XkEyXkFqcGdeQXVyMDI2NDg0NQ@@._V1_SX300.jpg",
        "releaseDate": "1924-05-11",
        "synopsis": "A film projectionist longs to be a detective, and puts his meagre skills to work when he is framed by a rival for stealing his girlfriend's father's pocketwatch.",
        "directors": [
            "Buster Keaton"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Portrait of a Lady on Fire": {
        "name": "Portrait of a Lady on Fire",
        "boxOffice": "3759854",
        "budget": "N/A",
        "cast": [
            "No\u00e9mie Merlant",
            "Ad\u00e8le Haenel",
            "Lu\u00e0na Bajrami"
        ],
        "countries": [
            "France"
        ],
        "duration": "122",
        "genres": [
            "Drama",
            "Romance"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BNjgwNjkwOWYtYmM3My00NzI1LTk5OGItYWY0OTMyZTY4OTg2XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
        "releaseDate": "2020-02-14",
        "synopsis": "On an isolated island in Brittany at the end of the eighteenth century, a female painter is obliged to paint a wedding portrait of a young woman.",
        "directors": [
            "C\u00e9line Sciamma"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Pink": {
        "name": "Pink",
        "boxOffice": "N/A",
        "budget": "N/A",
        "cast": [
            "Amitabh Bachchan",
            "Taapsee Pannu",
            "Kirti Kulhari"
        ],
        "countries": [
            "India"
        ],
        "duration": "136",
        "genres": [
            "Crime",
            "Drama",
            "Thriller"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BNGI1MTI1YTQtY2QwYi00YzUzLTg3NWYtNzExZDlhOTZmZWU0XkEyXkFqcGdeQXVyMDkwNTkwNg@@._V1_SX300.jpg",
        "releaseDate": "2016-09-16",
        "synopsis": "When three young women are implicated in a crime, a retired lawyer steps forward to help them clear their names.",
        "directors": [
            "Aniruddha Roy Chowdhury"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "The Invisible Guest": {
        "name": "The Invisible Guest",
        "boxOffice": "N/A",
        "budget": "N/A",
        "cast": [
            "Mario Casas",
            "Ana Wagener",
            "Jose Coronado"
        ],
        "countries": [
            "Spain"
        ],
        "duration": "106",
        "genres": [
            "Crime",
            "Drama",
            "Mystery"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BOTEwYTkzMTMtODEzNC00YWM2LTgxNDMtZWNkNTQzNDVjMWQ2L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMDY4NTQ1MA@@._V1_SX300.jpg",
        "releaseDate": "2017-01-06",
        "synopsis": "A successful entrepreneur accused of murder and a witness preparation expert have less than three hours to come up with an impregnable defense.",
        "directors": [
            "Oriol Paulo"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "The Handmaiden": {
        "name": "The Handmaiden",
        "boxOffice": "2006788",
        "budget": "N/A",
        "cast": [
            "Kim Min-hee",
            "Ha Jung-woo",
            "Cho Jin-woong"
        ],
        "countries": [
            "South Korea"
        ],
        "duration": "145",
        "genres": [
            "Drama",
            "Romance",
            "Thriller"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BNDJhYTk2MTctZmVmOS00OTViLTgxNjQtMzQxOTRiMDdmNGRjXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
        "releaseDate": "2016-06-01",
        "synopsis": "A woman is hired as a handmaiden to a Japanese heiress, but secretly she is involved in a plot to defraud her.",
        "directors": [
            "Park Chan-wook"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Mommy": {
        "name": "Mommy",
        "boxOffice": "3494070",
        "budget": "N/A",
        "cast": [
            "Anne Dorval",
            "Antoine Olivier Pilon",
            "Suzanne Cl\u00e9ment"
        ],
        "countries": [
            "Canada"
        ],
        "duration": "139",
        "genres": [
            "Drama"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BMGI3YWFmNDQtNjc0Ny00ZDBjLThlNjYtZTc1ZTk5MzU2YTVjXkEyXkFqcGdeQXVyNzA4ODc3ODU@._V1_SX300.jpg",
        "releaseDate": "2014-10-08",
        "synopsis": "A widowed single mother, raising her violent son alone, finds new hope when a mysterious neighbor inserts herself into their household.",
        "directors": [
            "Xavier Dolan"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Haider": {
        "name": "Haider",
        "boxOffice": "1048143",
        "budget": "N/A",
        "cast": [
            "Shahid Kapoor",
            "Tabu",
            "Shraddha Kapoor"
        ],
        "countries": [
            "India"
        ],
        "duration": "160",
        "genres": [
            "Action",
            "Crime",
            "Drama"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BMjA1NTEwMDMxMF5BMl5BanBnXkFtZTgwODkzMzI0MjE@._V1_SX300.jpg",
        "releaseDate": "2014-10-02",
        "synopsis": "A young man returns to Kashmir after his father's disappearance to confront his uncle, whom he suspects of playing a role in his father's fate.",
        "directors": [
            "Vishal Bhardwaj"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Logan": {
        "name": "Logan",
        "boxOffice": "226277068",
        "budget": "N/A",
        "cast": [
            "Hugh Jackman",
            "Patrick Stewart",
            "Dafne Keen"
        ],
        "countries": [
            "United States"
        ],
        "duration": "137",
        "genres": [
            "Action",
            "Drama",
            "Sci-Fi"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BYzc5MTU4N2EtYTkyMi00NjdhLTg3NWEtMTY4OTEyMzJhZTAzXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg",
        "releaseDate": "2017-03-03",
        "synopsis": "In a future where mutants are nearly extinct, an elderly and weary Logan leads a quiet life. But when Laura, a mutant child pursued by scientists, comes to him for help, he must get her to safety.",
        "directors": [
            "James Mangold"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Room": {
        "name": "Room",
        "boxOffice": "14677654",
        "budget": "N/A",
        "cast": [
            "Brie Larson",
            "Jacob Tremblay",
            "Sean Bridgers"
        ],
        "countries": [
            "Ireland",
            "Canada",
            "United Kingdom",
            "United States"
        ],
        "duration": "118",
        "genres": [
            "Drama",
            "Thriller"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BMjE4NzgzNzEwMl5BMl5BanBnXkFtZTgwMTMzMDE0NjE@._V1_SX300.jpg",
        "releaseDate": "2016-01-22",
        "synopsis": "A little boy is held captive in a room with his mother since his birth, so he has never known the world outside.",
        "directors": [
            "Lenny Abrahamson"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Wild Tales": {
        "name": "Wild Tales",
        "boxOffice": "3106530",
        "budget": "N/A",
        "cast": [
            "Dar\u00edo Grandinetti",
            "Mar\u00eda Marull",
            "M\u00f3nica Villa"
        ],
        "countries": [
            "Argentina",
            "Spain",
            "France",
            "United Kingdom"
        ],
        "duration": "122",
        "genres": [
            "Comedy",
            "Drama",
            "Thriller"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BNGQzY2Y0MTgtMDA4OC00NjM3LWI0ZGQtNTJlM2UxZDQxZjI0XkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
        "releaseDate": "2014-08-21",
        "synopsis": "Six short stories that explore the extremities of human behavior involving people in distress.",
        "directors": [
            "Dami\u00e1n Szifron"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Winter Sleep": {
        "name": "Winter Sleep",
        "boxOffice": "N/A",
        "budget": "N/A",
        "cast": [
            "Haluk Bilginer",
            "Melisa S\u00f6zen",
            "Demet Akbag"
        ],
        "countries": [
            "Turkey",
            "France",
            "Germany"
        ],
        "duration": "196",
        "genres": [
            "Drama"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BYzE2MjEwMTQtOTQ2Mi00ZWExLTkyMjUtNmJjMjBlYWFjZDdlXkEyXkFqcGdeQXVyMTI3ODAyMzE2._V1_SX300.jpg",
        "releaseDate": "2014-06-13",
        "synopsis": "A hotel owner and landlord in a remote Turkish village deals with conflicts within his family and a tenant behind on his rent.",
        "directors": [
            "Nuri Bilge Ceylan"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Baahubali: The Beginning": {
        "name": "Baahubali: The Beginning",
        "boxOffice": "6738000",
        "budget": "N/A",
        "cast": [
            "Prabhas",
            "Rana Daggubati",
            "Anushka Shetty"
        ],
        "countries": [
            "India"
        ],
        "duration": "159",
        "genres": [
            "Action",
            "Drama"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BYWVlMjVhZWYtNWViNC00ODFkLTk1MmItYjU1MDY5ZDdhMTU3XkEyXkFqcGdeQXVyODIwMDI1NjM@._V1_SX300.jpg",
        "releaseDate": "2015-07-09",
        "synopsis": "In ancient India, an adventurous and daring man becomes involved in a decades-old feud between two warring peoples.",
        "directors": [
            "S.S. Rajamouli"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Gully Boy": {
        "name": "Gully Boy",
        "boxOffice": "5566534",
        "budget": "N/A",
        "cast": [
            "Ranveer Singh",
            "Alia Bhatt",
            "Siddhant Chaturvedi"
        ],
        "countries": [
            "India"
        ],
        "duration": "154",
        "genres": [
            "Drama",
            "Music",
            "Romance"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BZDkzMTQ1YTMtMWY4Ny00MzExLTkzYzEtNzZhOTczNzU2NTU1XkEyXkFqcGdeQXVyODY3NjMyMDU@._V1_SX300.jpg",
        "releaseDate": "2019-02-14",
        "synopsis": "A coming-of-age story based on the lives of street rappers in Mumbai.",
        "directors": [
            "Zoya Akhtar"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "PK": {
        "name": "PK",
        "boxOffice": "10616104",
        "budget": "N/A",
        "cast": [
            "Aamir Khan",
            "Anushka Sharma",
            "Sanjay Dutt"
        ],
        "countries": [
            "India"
        ],
        "duration": "153",
        "genres": [
            "Comedy",
            "Drama",
            "Sci-Fi"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BMTYzOTE2NjkxN15BMl5BanBnXkFtZTgwMDgzMTg0MzE@._V1_SX300.jpg",
        "releaseDate": "2014-12-19",
        "synopsis": "An alien on Earth loses the only device he can use to communicate with his spaceship. His innocent nature and child-like questions force the country to evaluate the impact of there religious views on there people.",
        "directors": [
            "Rajkumar Hirani"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "OMG: Oh My God!": {
        "name": "OMG: Oh My God!",
        "boxOffice": "N/A",
        "budget": "N/A",
        "cast": [
            "Paresh Rawal",
            "Akshay Kumar",
            "Mithun Chakraborty"
        ],
        "countries": [
            "India"
        ],
        "duration": "125",
        "genres": [
            "Comedy",
            "Drama",
            "Fantasy"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BMGNhYjUwNmYtNDQxNi00NDdmLTljMDAtZWM1NDQyZTk3ZDYwXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
        "releaseDate": "2012-09-28",
        "synopsis": "A shopkeeper takes God to court when his shop is destroyed by an earthquake.",
        "directors": [
            "Umesh Shukla"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "The Grand Budapest Hotel": {
        "name": "The Grand Budapest Hotel",
        "boxOffice": "59301324",
        "budget": "N/A",
        "cast": [
            "Ralph Fiennes",
            "F. Murray Abraham",
            "Mathieu Amalric"
        ],
        "countries": [
            "United States",
            "Germany"
        ],
        "duration": "99",
        "genres": [
            "Adventure",
            "Comedy",
            "Crime"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BMzM5NjUxOTEyMl5BMl5BanBnXkFtZTgwNjEyMDM0MDE@._V1_SX300.jpg",
        "releaseDate": "2014-03-28",
        "synopsis": "A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy in the hotel's glorious years under an exceptional concierge.",
        "directors": [
            "Wes Anderson"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Gone Girl": {
        "name": "Gone Girl",
        "boxOffice": "167767189",
        "budget": "N/A",
        "cast": [
            "Ben Affleck",
            "Rosamund Pike",
            "Neil Patrick Harris"
        ],
        "countries": [
            "United States"
        ],
        "duration": "149",
        "genres": [
            "Drama",
            "Mystery",
            "Thriller"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BMTk0MDQ3MzAzOV5BMl5BanBnXkFtZTgwNzU1NzE3MjE@._V1_SX300.jpg",
        "releaseDate": "2014-10-03",
        "synopsis": "With his wife's disappearance having become the focus of an intense media circus, a man sees the spotlight turned on him when it's suspected that he may not be innocent.",
        "directors": [
            "David Fincher"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Wolf Children": {
        "name": "Wolf Children",
        "boxOffice": "N/A",
        "budget": "N/A",
        "cast": [
            "Aoi Miyazaki",
            "Takao Osawa",
            "Haru Kuroki"
        ],
        "countries": [
            "Japan"
        ],
        "duration": "117",
        "genres": [
            "Animation",
            "Drama",
            "Family"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BYzQxNDZhNDUtNDUwOC00NjQyLTg2OWUtZWVlYThjYjYyMTc2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
        "releaseDate": "2012-07-21",
        "synopsis": "After her werewolf lover unexpectedly dies in an accident while hunting for food for their children, a young woman must find ways to raise the werewolf son and daughter that she had with him while keeping their trait hidden from s...",
        "directors": [
            "Mamoru Hosoda"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Hacksaw Ridge": {
        "name": "Hacksaw Ridge",
        "boxOffice": "67209615",
        "budget": "N/A",
        "cast": [
            "Andrew Garfield",
            "Sam Worthington",
            "Luke Bracey"
        ],
        "countries": [
            "Australia",
            "United States",
            "United Kingdom",
            "China"
        ],
        "duration": "139",
        "genres": [
            "Biography",
            "Drama",
            "History"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BMjQ1NjM3MTUxNV5BMl5BanBnXkFtZTgwMDc5MTY5OTE@._V1_SX300.jpg",
        "releaseDate": "2016-11-04",
        "synopsis": "World War II American Army Medic Desmond T. Doss, who served during the Battle of Okinawa, refuses to kill people and becomes the first man in American history to receive the Medal of Honor without firing a shot.",
        "directors": [
            "Mel Gibson"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Inside Out": {
        "name": "Inside Out",
        "boxOffice": "356921711",
        "budget": "N/A",
        "cast": [
            "Amy Poehler",
            "Bill Hader",
            "Lewis Black"
        ],
        "countries": [
            "United States",
            "Japan"
        ],
        "duration": "95",
        "genres": [
            "Animation",
            "Adventure",
            "Comedy"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BOTgxMDQwMDk0OF5BMl5BanBnXkFtZTgwNjU5OTg2NDE@._V1_SX300.jpg",
        "releaseDate": "2015-06-19",
        "synopsis": "After young Riley is uprooted from her Midwest life and moved to San Francisco, her emotions - Joy, Fear, Anger, Disgust and Sadness - conflict on how best to navigate a new city, house, and school.",
        "directors": [
            "Pete Docter",
            "Ronnie Del Carmen"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Barfi!": {
        "name": "Barfi!",
        "boxOffice": "2804874",
        "budget": "N/A",
        "cast": [
            "Ranbir Kapoor",
            "Priyanka Chopra Jonas",
            "Ileana D'Cruz"
        ],
        "countries": [
            "India"
        ],
        "duration": "151",
        "genres": [
            "Comedy",
            "Drama",
            "Romance"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BMTQzMTEyODY2Ml5BMl5BanBnXkFtZTgwMjA0MDUyMjE@._V1_SX300.jpg",
        "releaseDate": "2012-09-14",
        "synopsis": "Three young people learn that love can neither be defined nor contained by society's definition of normal and abnormal.",
        "directors": [
            "Anurag Basu"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "12 Years a Slave": {
        "name": "12 Years a Slave",
        "boxOffice": "56671993",
        "budget": "N/A",
        "cast": [
            "Chiwetel Ejiofor",
            "Michael Kenneth Williams",
            "Michael Fassbender"
        ],
        "countries": [
            "United States",
            "United Kingdom"
        ],
        "duration": "134",
        "genres": [
            "Biography",
            "Drama",
            "History"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BMjExMTEzODkyN15BMl5BanBnXkFtZTcwNTU4NTc4OQ@@._V1_SX300.jpg",
        "releaseDate": "2013-11-08",
        "synopsis": "In the antebellum United States, Solomon Northup, a free black man from upstate New York, is abducted and sold into slavery.",
        "directors": [
            "Steve McQueen"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Rush": {
        "name": "Rush",
        "boxOffice": "26947624",
        "budget": "N/A",
        "cast": [
            "Daniel Br\u00fchl",
            "Chris Hemsworth",
            "Olivia Wilde"
        ],
        "countries": [
            "United Kingdom",
            "United States"
        ],
        "duration": "123",
        "genres": [
            "Action",
            "Biography",
            "Drama"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BOWEwODJmZDItYTNmZC00OGM4LThlNDktOTQzZjIzMGQxODA4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
        "releaseDate": "2013-09-27",
        "synopsis": "The merciless 1970s rivalry between Formula One rivals James Hunt and Niki Lauda.",
        "directors": [
            "Ron Howard"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Spotlight": {
        "name": "Spotlight",
        "boxOffice": "45055776",
        "budget": "N/A",
        "cast": [
            "Mark Ruffalo",
            "Michael Keaton",
            "Rachel McAdams"
        ],
        "countries": [
            "United States"
        ],
        "duration": "129",
        "genres": [
            "Biography",
            "Crime",
            "Drama"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BMjIyOTM5OTIzNV5BMl5BanBnXkFtZTgwMDkzODE2NjE@._V1_SX300.jpg",
        "releaseDate": "2015-11-20",
        "synopsis": "The true story of how the Boston Globe uncovered the massive scandal of child molestation and cover-up within the local Catholic Archdiocese, shaking the entire Catholic Church to its core.",
        "directors": [
            "Tom McCarthy"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Song of the Sea": {
        "name": "Song of the Sea",
        "boxOffice": "857522",
        "budget": "N/A",
        "cast": [
            "David Rawle",
            "Brendan Gleeson",
            "Lisa Hannigan"
        ],
        "countries": [
            "Ireland",
            "Denmark",
            "Belgium",
            "France"
        ],
        "duration": "93",
        "genres": [
            "Animation",
            "Adventure",
            "Drama"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BMTQ2MDMwNjEwNV5BMl5BanBnXkFtZTgwOTkxMzI0MzE@._V1_SX300.jpg",
        "releaseDate": "2015-11-20",
        "synopsis": "Ben, a young Irish boy, and his little sister Saoirse, a girl who can turn into a seal, go on an adventure to free the fairies and save the spirit world.",
        "directors": [
            "Tomm Moore"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Kahaani": {
        "name": "Kahaani",
        "boxOffice": "N/A",
        "budget": "N/A",
        "cast": [
            "Vidya Balan",
            "Parambrata Chattopadhyay",
            "Indraneil Sengupta"
        ],
        "countries": [
            "India"
        ],
        "duration": "122",
        "genres": [
            "Mystery",
            "Thriller"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BMTQ1NDI0NzkyOF5BMl5BanBnXkFtZTcwNzAyNzE2Nw@@._V1_SX300.jpg",
        "releaseDate": "2012-03-09",
        "synopsis": "A pregnant woman's search for her missing husband takes her from London to Kolkata, but everyone she questions denies having ever met him.",
        "directors": [
            "Sujoy Ghosh"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Zindagi Na Milegi Dobara": {
        "name": "Zindagi Na Milegi Dobara",
        "boxOffice": "3108485",
        "budget": "N/A",
        "cast": [
            "Hrithik Roshan",
            "Farhan Akhtar",
            "Abhay Deol"
        ],
        "countries": [
            "India"
        ],
        "duration": "155",
        "genres": [
            "Comedy",
            "Drama",
            "Musical"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BZGFmMjM5OWMtZTRiNC00ODhlLThlYTItYTcyZDMyYmMyYjFjXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
        "releaseDate": "2011-07-15",
        "synopsis": "Three friends decide to turn their fantasy vacation into reality after one of their friends gets engaged.",
        "directors": [
            "Zoya Akhtar"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "The Help": {
        "name": "The Help",
        "boxOffice": "169708112",
        "budget": "N/A",
        "cast": [
            "Viola Davis",
            "Emma Stone",
            "Octavia Spencer"
        ],
        "countries": [
            "United States",
            "India"
        ],
        "duration": "146",
        "genres": [
            "Drama"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BMTM5OTMyMjIxOV5BMl5BanBnXkFtZTcwNzU4MjIwNQ@@._V1_SX300.jpg",
        "releaseDate": "2011-08-10",
        "synopsis": "An aspiring author during the civil rights movement of the 1960s decides to write a book detailing the African American maids' point of view on the white families for which they work, and the hardships they go through on a daily b...",
        "directors": [
            "Tate Taylor"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Prisoners": {
        "name": "Prisoners",
        "boxOffice": "61002302",
        "budget": "N/A",
        "cast": [
            "Hugh Jackman",
            "Jake Gyllenhaal",
            "Viola Davis"
        ],
        "countries": [
            "United States"
        ],
        "duration": "153",
        "genres": [
            "Crime",
            "Drama",
            "Mystery"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BMTg0NTIzMjQ1NV5BMl5BanBnXkFtZTcwNDc3MzM5OQ@@._V1_SX300.jpg",
        "releaseDate": "2013-09-20",
        "synopsis": "When Keller Dover's daughter and her friend go missing, he takes matters into his own hands as the police pursue multiple leads and the pressure mounts.",
        "directors": [
            "Denis Villeneuve"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Mad Max: Fury Road": {
        "name": "Mad Max: Fury Road",
        "boxOffice": "154109060",
        "budget": "N/A",
        "cast": [
            "Tom Hardy",
            "Charlize Theron",
            "Nicholas Hoult"
        ],
        "countries": [
            "Australia"
        ],
        "duration": "120",
        "genres": [
            "Action",
            "Adventure",
            "Sci-Fi"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BN2EwM2I5OWMtMGQyMi00Zjg1LWJkNTctZTdjYTA4OGUwZjMyXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
        "releaseDate": "2015-05-15",
        "synopsis": "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland with the aid of a group of female prisoners, a psychotic worshiper and a drifter named Max.",
        "directors": [
            "George Miller"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "A Wednesday": {
        "name": "A Wednesday",
        "boxOffice": "N/A",
        "budget": "N/A",
        "cast": [
            "Anupam Kher",
            "Naseeruddin Shah",
            "Veerendra Saxena"
        ],
        "countries": [
            "India"
        ],
        "duration": "104",
        "genres": [
            "Action",
            "Crime",
            "Drama"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BOTcwMzdiMWItMjZlOS00MzAzLTg5OTItNTA4OGYyMjBhMmRiXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
        "releaseDate": "2008-09-05",
        "synopsis": "A retiring police officer reminisces about the most astounding day of his career. About a case that was never filed but continues to haunt him in his memories - the case of a man and a Wednesday.",
        "directors": [
            "Neeraj Pandey"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Gran Torino": {
        "name": "Gran Torino",
        "boxOffice": "148095302",
        "budget": "N/A",
        "cast": [
            "Clint Eastwood",
            "Bee Vang",
            "Christopher Carley"
        ],
        "countries": [
            "Germany",
            "United States"
        ],
        "duration": "116",
        "genres": [
            "Drama"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BMTc5NTk2OTU1Nl5BMl5BanBnXkFtZTcwMDc3NjAwMg@@._V1_SX300.jpg",
        "releaseDate": "2009-01-09",
        "synopsis": "After a Hmong teenager tries to steal his prized 1972 Gran Torino, a disgruntled, prejudiced Korean War veteran seeks to redeem both the boy and himself.",
        "directors": [
            "Clint Eastwood"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Harry Potter and the Deathly Hallows: Part 2": {
        "name": "Harry Potter and the Deathly Hallows: Part 2",
        "boxOffice": "381447587",
        "budget": "N/A",
        "cast": [
            "Daniel Radcliffe",
            "Emma Watson",
            "Rupert Grint"
        ],
        "countries": [
            "United Kingdom",
            "United States"
        ],
        "duration": "130",
        "genres": [
            "Adventure",
            "Family",
            "Fantasy"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
        "releaseDate": "2011-07-15",
        "synopsis": "Harry, Ron, and Hermione search for Voldemort's remaining Horcruxes in their effort to destroy the Dark Lord as the final battle rages on at Hogwarts.",
        "directors": [
            "David Yates"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Shutter Island": {
        "name": "Shutter Island",
        "boxOffice": "128012934",
        "budget": "N/A",
        "cast": [
            "Leonardo DiCaprio",
            "Emily Mortimer",
            "Mark Ruffalo"
        ],
        "countries": [
            "United States"
        ],
        "duration": "138",
        "genres": [
            "Mystery",
            "Thriller"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BYzhiNDkyNzktNTZmYS00ZTBkLTk2MDAtM2U0YjU1MzgxZjgzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
        "releaseDate": "2010-02-19",
        "synopsis": "Teddy Daniels and Chuck Aule, two US marshals, are sent to an asylum on a remote island in order to investigate the disappearance of a patient, where Teddy uncovers a shocking truth about the place.",
        "directors": [
            "Martin Scorsese"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Departures": {
        "name": "Departures",
        "boxOffice": "1498210",
        "budget": "N/A",
        "cast": [
            "Masahiro Motoki",
            "Ry\u00f4ko Hirosue",
            "Tsutomu Yamazaki"
        ],
        "countries": [
            "Japan"
        ],
        "duration": "130",
        "genres": [
            "Drama"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BMTUzOTcwOTA2NV5BMl5BanBnXkFtZTcwNDczMzczMg@@._V1_SX300.jpg",
        "releaseDate": "2009-06-19",
        "synopsis": "A newly unemployed cellist takes a job preparing the dead for funerals.",
        "directors": [
            "Y\u00f4jir\u00f4 Takita"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Hachi: A Dog's Tale": {
        "name": "Hachi: A Dog's Tale",
        "boxOffice": "N/A",
        "budget": "N/A",
        "cast": [
            "Richard Gere",
            "Joan Allen",
            "Cary-Hiroyuki Tagawa"
        ],
        "countries": [
            "United Kingdom",
            "United States"
        ],
        "duration": "93",
        "genres": [
            "Biography",
            "Drama",
            "Family"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BNzE4NDg5OWMtMzg3NC00ZDRjLTllMDMtZTRjNWZmNjBmMGZlXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
        "releaseDate": "2010-03-12",
        "synopsis": "A college professor bonds with an abandoned dog he takes into his home.",
        "directors": [
            "Lasse Hallstr\u00f6m"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Mary and Max": {
        "name": "Mary and Max",
        "boxOffice": "N/A",
        "budget": "N/A",
        "cast": [
            "Toni Collette",
            "Philip Seymour Hoffman",
            "Eric Bana"
        ],
        "countries": [
            "Australia"
        ],
        "duration": "92",
        "genres": [
            "Animation",
            "Comedy",
            "Drama"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BMDgzYjQwMDMtNGUzYi00MTRmLWIyMGMtNjE1OGZkNzY2YWIzL2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
        "releaseDate": "2010-03-12",
        "synopsis": "A tale of friendship between two unlikely pen pals: Mary, a lonely, eight-year-old girl living in the suburbs of Melbourne, and Max, a forty-four-year old, severely obese man living in New York.",
        "directors": [
            "Adam Elliot"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "How to Train Your Dragon": {
        "name": "How to Train Your Dragon",
        "boxOffice": "217581231",
        "budget": "N/A",
        "cast": [
            "Jay Baruchel",
            "Gerard Butler",
            "Christopher Mintz-Plasse"
        ],
        "countries": [
            "United States",
            "France"
        ],
        "duration": "98",
        "genres": [
            "Animation",
            "Action",
            "Adventure"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BMjA5NDQyMjc2NF5BMl5BanBnXkFtZTcwMjg5ODcyMw@@._V1_SX300.jpg",
        "releaseDate": "2010-03-26",
        "synopsis": "A hapless young Viking who aspires to hunt dragons becomes the unlikely friend of a young dragon himself, and learns there may be more to the creatures than he assumed.",
        "directors": [
            "Dean DeBlois",
            "Chris Sanders"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Elite Squad": {
        "name": "Elite Squad",
        "boxOffice": "8744",
        "budget": "N/A",
        "cast": [
            "Wagner Moura",
            "Andr\u00e9 Ramiro",
            "Caio Junqueira"
        ],
        "countries": [
            "Brazil",
            "United States",
            "Argentina"
        ],
        "duration": "115",
        "genres": [
            "Action",
            "Crime",
            "Drama"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BMGJjN2M1ZGMtNjg3ZC00MTA1LWEyZDItMjIzZTRlYzgzODRkXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
        "releaseDate": "2007-10-12",
        "synopsis": "In 1997 Rio de Janeiro, Captain Nascimento has to find a substitute for his position while trying to take down drug dealers and criminals before the Pope visits.",
        "directors": [
            "Jos\u00e9 Padilha"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Into the Wild": {
        "name": "Into the Wild",
        "boxOffice": "18354356",
        "budget": "N/A",
        "cast": [
            "Emile Hirsch",
            "Vince Vaughn",
            "Catherine Keener"
        ],
        "countries": [
            "United States"
        ],
        "duration": "148",
        "genres": [
            "Adventure",
            "Biography",
            "Drama"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BNjQ0ODlhMWUtNmUwMS00YjExLWI4MjQtNjVmMmE2Y2E0MGRmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
        "releaseDate": "2007-10-19",
        "synopsis": "After graduating from Emory University, top student and athlete Christopher McCandless abandons his possessions, gives his entire $24,000 savings account to charity and hitchhikes to Alaska to live in the wilderness. Along the way...",
        "directors": [
            "Sean Penn"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "No Country for Old Men": {
        "name": "No Country for Old Men",
        "boxOffice": "74283625",
        "budget": "N/A",
        "cast": [
            "Tommy Lee Jones",
            "Javier Bardem",
            "Josh Brolin"
        ],
        "countries": [
            "United States"
        ],
        "duration": "122",
        "genres": [
            "Crime",
            "Drama",
            "Thriller"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BMjA5Njk3MjM4OV5BMl5BanBnXkFtZTcwMTc5MTE1MQ@@._V1_SX300.jpg",
        "releaseDate": "2007-11-21",
        "synopsis": "Violence and mayhem ensue after a hunter stumbles upon a drug deal gone wrong and more than two million dollars in cash near the Rio Grande.",
        "directors": [
            "Ethan Coen",
            "Joel Coen"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Million Dollar Baby": {
        "name": "Million Dollar Baby",
        "boxOffice": "100492203",
        "budget": "N/A",
        "cast": [
            "Hilary Swank",
            "Clint Eastwood",
            "Morgan Freeman"
        ],
        "countries": [
            "United States"
        ],
        "duration": "132",
        "genres": [
            "Drama",
            "Sport"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BMTkxNzA1NDQxOV5BMl5BanBnXkFtZTcwNTkyMTIzMw@@._V1_SX300.jpg",
        "releaseDate": "2005-01-28",
        "synopsis": "Frankie, an ill-tempered old coach, reluctantly agrees to train aspiring boxer Maggie. Impressed with her determination and talent, he helps her become the best and the two soon form a close bond.",
        "directors": [
            "Clint Eastwood"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Hotel Rwanda": {
        "name": "Hotel Rwanda",
        "boxOffice": "23530892",
        "budget": "N/A",
        "cast": [
            "Don Cheadle",
            "Sophie Okonedo",
            "Joaquin Phoenix"
        ],
        "countries": [
            "United Kingdom",
            "South Africa",
            "Italy",
            "United States"
        ],
        "duration": "121",
        "genres": [
            "Biography",
            "Drama",
            "History"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BZGJjYmIzZmQtNWE4Yy00ZGVmLWJkZGEtMzUzNmQ4ZWFlMjRhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
        "releaseDate": "2005-02-04",
        "synopsis": "Paul Rusesabagina, a hotel manager, houses over a thousand Tutsi refugees during their struggle against the Hutu militia in Rwanda, Africa.",
        "directors": [
            "Terry George"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Brotherhood": {
        "name": "Brotherhood",
        "boxOffice": "N/A",
        "budget": "N/A",
        "cast": [
            "Jason Isaacs",
            "Jason Clarke",
            "Annabeth Gish"
        ],
        "countries": [
            "United States"
        ],
        "duration": "60",
        "genres": [
            "Crime",
            "Drama"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BNWYxNGQ5NGYtOGY3MS00NzE1LWJmZDItY2MzNWVmNGZlNzJiXkEyXkFqcGdeQXVyOTA3MTMyOTk@._V1_SX300.jpg",
        "releaseDate": "2006-07-09",
        "synopsis": "Set in an Irish neighborhood in Providence, Rhode Island, the series revolves around two brothers on opposite sides of the law: one a gangster (Jason Isaacs) and the other a state politician (Jason Clarke).",
        "directors": [
            "N/A"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Munna Bhai M.B.B.S.": {
        "name": "Munna Bhai M.B.B.S.",
        "boxOffice": "48772",
        "budget": "N/A",
        "cast": [
            "Sanjay Dutt",
            "Arshad Warsi",
            "Gracy Singh"
        ],
        "countries": [
            "India"
        ],
        "duration": "156",
        "genres": [
            "Comedy",
            "Drama"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BMzQ4MTBlYTQtMzJkYS00OGNjLTk1MWYtNzQ0OTQ0OWEyOWU1XkEyXkFqcGdeQXVyNDgyODgxNjE@._V1_SX300.jpg",
        "releaseDate": "2003-12-19",
        "synopsis": "A gangster sets out to fulfill his father's dream of becoming a doctor.",
        "directors": [
            "Rajkumar Hirani"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Memories of Murder": {
        "name": "Memories of Murder",
        "boxOffice": "15357",
        "budget": "N/A",
        "cast": [
            "Song Kang-ho",
            "Kim Sang-kyung",
            "Roe-ha Kim"
        ],
        "countries": [
            "South Korea"
        ],
        "duration": "132",
        "genres": [
            "Crime",
            "Drama",
            "Mystery"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BOGViNTg4YTktYTQ2Ni00MTU0LTk2NWUtMTI4OTc1YTM0NzQ2XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg",
        "releaseDate": "2003-05-02",
        "synopsis": "In a small Korean province in 1986, two detectives struggle with the case of multiple young women being found raped and murdered by an unknown culprit.",
        "directors": [
            "Bong Joon Ho"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Dil Chahta Hai": {
        "name": "Dil Chahta Hai",
        "boxOffice": "N/A",
        "budget": "N/A",
        "cast": [
            "Aamir Khan",
            "Saif Ali Khan",
            "Akshaye Khanna"
        ],
        "countries": [
            "India"
        ],
        "duration": "183",
        "genres": [
            "Comedy",
            "Drama",
            "Romance"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BMjRjMTYwMTYtMmRkNi00MmVkLWE0MjQtNmM3YjI0NWFhZDNmXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
        "releaseDate": "2001-08-10",
        "synopsis": "Three inseparable childhood friends are just out of college. Nothing comes between them - until they each fall in love, and their wildly different approaches to relationships creates tension.",
        "directors": [
            "Farhan Akhtar"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Kill Bill: Vol. 1": {
        "name": "Kill Bill: Vol. 1",
        "boxOffice": "70099045",
        "budget": "N/A",
        "cast": [
            "Uma Thurman",
            "David Carradine",
            "Daryl Hannah"
        ],
        "countries": [
            "United States"
        ],
        "duration": "111",
        "genres": [
            "Action",
            "Crime",
            "Drama"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BNzM3NDFhYTAtYmU5Mi00NGRmLTljYjgtMDkyODQ4MjNkMGY2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
        "releaseDate": "2003-10-10",
        "synopsis": "After awakening from a four-year coma, a former assassin wreaks vengeance on the team of assassins who betrayed her.",
        "directors": [
            "Quentin Tarantino"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Finding Nemo": {
        "name": "Finding Nemo",
        "boxOffice": "380843261",
        "budget": "N/A",
        "cast": [
            "Albert Brooks",
            "Ellen DeGeneres",
            "Alexander Gould"
        ],
        "countries": [
            "United States",
            "Japan"
        ],
        "duration": "100",
        "genres": [
            "Animation",
            "Adventure",
            "Comedy"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BZjMxYzBiNjUtZDliNC00MDAyLTg3N2QtOWNjNmNhZGQzNDg5XkEyXkFqcGdeQXVyNjE2MjQwNjc@._V1_SX300.jpg",
        "releaseDate": "2003-05-30",
        "synopsis": "After his son is captured in the Great Barrier Reef and taken to Sydney, a timid clownfish sets out on a journey to bring him home.",
        "directors": [
            "Andrew Stanton",
            "Lee Unkrich"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Catch Me If You Can": {
        "name": "Catch Me If You Can",
        "boxOffice": "164615351",
        "budget": "N/A",
        "cast": [
            "Leonardo DiCaprio",
            "Tom Hanks",
            "Christopher Walken"
        ],
        "countries": [
            "United States",
            "Canada"
        ],
        "duration": "141",
        "genres": [
            "Biography",
            "Crime",
            "Drama"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BMTY5MzYzNjc5NV5BMl5BanBnXkFtZTYwNTUyNTc2._V1_SX300.jpg",
        "releaseDate": "2002-12-25",
        "synopsis": "Barely 21 yet, Frank is a skilled forger who has passed as a doctor, lawyer and pilot. FBI agent Carl becomes obsessed with tracking down the con man, who only revels in the pursuit.",
        "directors": [
            "Steven Spielberg"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Amores Perros": {
        "name": "Amores Perros",
        "boxOffice": "5408467",
        "budget": "N/A",
        "cast": [
            "Emilio Echevarr\u00eda",
            "Gael Garc\u00eda Bernal",
            "Goya Toledo"
        ],
        "countries": [
            "Mexico"
        ],
        "duration": "154",
        "genres": [
            "Drama",
            "Thriller"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BZjUxNmEwOGItMTBmYi00MWQ1LWExY2MtNDUxMjI0OWM4M2NiXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg",
        "releaseDate": "2001-04-13",
        "synopsis": "A horrific car accident connects three stories, each involving characters dealing with loss, regret, and life's harsh realities, all in the name of love.",
        "directors": [
            "Alejandro G. I\u00f1\u00e1rritu"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Neon Genesis Evangelion: The End of Evangelion": {
        "name": "Neon Genesis Evangelion: The End of Evangelion",
        "boxOffice": "N/A",
        "budget": "N/A",
        "cast": [
            "Megumi Ogata",
            "Megumi Hayashibara",
            "Y\u00fbko Miyamura"
        ],
        "countries": [
            "Japan"
        ],
        "duration": "87",
        "genres": [
            "Animation",
            "Action",
            "Drama"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BMjU0MzQwMmMtMWU3OS00MDc0LWIzOTItZmE1MjZlYmExMGJiXkEyXkFqcGdeQXVyNzI1NzMxNzM@._V1_SX300.jpg",
        "releaseDate": "2002-06-01",
        "synopsis": "Concurrent theatrical ending of the TV series Neon Genesis Evangelion (1995).",
        "directors": [
            "Hideaki Anno",
            "Kazuya Tsurumaki"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Lagaan: Once Upon a Time in India": {
        "name": "Lagaan: Once Upon a Time in India",
        "boxOffice": "909043",
        "budget": "N/A",
        "cast": [
            "Aamir Khan",
            "Raghubir Yadav",
            "Gracy Singh"
        ],
        "countries": [
            "India"
        ],
        "duration": "224",
        "genres": [
            "Drama",
            "Musical",
            "Sport"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BNmYxZGJlNmQtMWY3OS00Njc0LThjODgtOWEwMWU4NTUxMDExXkEyXkFqcGdeQXVyNDAzNDk0MTQ@._V1_SX300.jpg",
        "releaseDate": "2001-06-15",
        "synopsis": "The people of a small village in Victorian India stake their future on a game of cricket against their ruthless British rulers.",
        "directors": [
            "Ashutosh Gowariker"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "The Sixth Sense": {
        "name": "The Sixth Sense",
        "boxOffice": "293506292",
        "budget": "N/A",
        "cast": [
            "Bruce Willis",
            "Haley Joel Osment",
            "Toni Collette"
        ],
        "countries": [
            "United States"
        ],
        "duration": "107",
        "genres": [
            "Drama",
            "Mystery",
            "Thriller"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BMWM4NTFhYjctNzUyNi00NGMwLTk3NTYtMDIyNTZmMzRlYmQyXkEyXkFqcGdeQXVyMTAwMzUyOTc@._V1_SX300.jpg",
        "releaseDate": "1999-08-06",
        "synopsis": "A frightened, withdrawn Philadelphia boy who communicates with spirits seeks the help of a disheartened child psychologist.",
        "directors": [
            "M. Night Shyamalan"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "The Legend of 1900": {
        "name": "The Legend of 1900",
        "boxOffice": "167435",
        "budget": "N/A",
        "cast": [
            "Tim Roth",
            "Pruitt Taylor Vince",
            "M\u00e9lanie Thierry"
        ],
        "countries": [
            "Italy"
        ],
        "duration": "169",
        "genres": [
            "Drama",
            "Music",
            "Romance"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BMzIwOTdmNjQtOWQ1ZS00ZWQ4LWIxYTMtOWFkM2NjODJiMGY4L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTI4MjkwNjA@._V1_SX300.jpg",
        "releaseDate": "1998-10-28",
        "synopsis": "A baby boy discovered on an ocean liner in 1900 grows into a musical prodigy, never setting foot on land.",
        "directors": [
            "Giuseppe Tornatore"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "The Truman Show": {
        "name": "The Truman Show",
        "boxOffice": "125618201",
        "budget": "N/A",
        "cast": [
            "Jim Carrey",
            "Ed Harris",
            "Laura Linney"
        ],
        "countries": [
            "United States"
        ],
        "duration": "103",
        "genres": [
            "Comedy",
            "Drama"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BMDIzODcyY2EtMmY2MC00ZWVlLTgwMzAtMjQwOWUyNmJjNTYyXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
        "releaseDate": "1998-06-05",
        "synopsis": "An insurance salesman discovers his whole life is actually a reality TV show.",
        "directors": [
            "Peter Weir"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "The Big Lebowski": {
        "name": "The Big Lebowski",
        "boxOffice": "18254458",
        "budget": "N/A",
        "cast": [
            "Jeff Bridges",
            "John Goodman",
            "Julianne Moore"
        ],
        "countries": [
            "United States",
            "United Kingdom"
        ],
        "duration": "117",
        "genres": [
            "Comedy",
            "Crime"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BMTQ0NjUzMDMyOF5BMl5BanBnXkFtZTgwODA1OTU0MDE@._V1_SX300.jpg",
        "releaseDate": "1998-03-06",
        "synopsis": "Ultimate L.A. slacker Jeff \"The Dude\" Lebowski, mistaken for a millionaire of the same name, seeks restitution for a rug ruined by debt collectors, enlisting his bowling buddies for help while trying to find the millionaire's miss...",
        "directors": [
            "Joel Coen",
            "Ethan Coen"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "In the Mood for Love": {
        "name": "In the Mood for Love",
        "boxOffice": "2738980",
        "budget": "N/A",
        "cast": [
            "Tony Leung Chiu-wai",
            "Maggie Cheung",
            "Siu Ping-Lam"
        ],
        "countries": [
            "Hong Kong",
            "France"
        ],
        "duration": "98",
        "genres": [
            "Drama",
            "Romance"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BYWVjNjMwZTgtMGYyYy00NmVhLWE1NDItMzFhMmJkYTNjYWIwXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
        "releaseDate": "2001-03-09",
        "synopsis": "Two neighbors form a strong bond after both suspect extramarital activities of their spouses. However, they agree to keep their bond platonic so as not to commit similar wrongs.",
        "directors": [
            "Kar-Wai Wong"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Trainspotting": {
        "name": "Trainspotting",
        "boxOffice": "16491080",
        "budget": "N/A",
        "cast": [
            "Ewan McGregor",
            "Ewen Bremner",
            "Jonny Lee Miller"
        ],
        "countries": [
            "United Kingdom"
        ],
        "duration": "93",
        "genres": [
            "Drama"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BMzA5Zjc3ZTMtMmU5YS00YTMwLWI4MWUtYTU0YTVmNjVmODZhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
        "releaseDate": "1996-08-09",
        "synopsis": "Renton, deeply immersed in the Edinburgh drug scene, tries to clean up and get out, despite the allure of the drugs and influence of friends.",
        "directors": [
            "Danny Boyle"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Fargo": {
        "name": "Fargo",
        "boxOffice": "24611975",
        "budget": "N/A",
        "cast": [
            "William H. Macy",
            "Frances McDormand",
            "Steve Buscemi"
        ],
        "countries": [
            "United States",
            "United Kingdom"
        ],
        "duration": "98",
        "genres": [
            "Crime",
            "Thriller"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BNDJiZDgyZjctYmRjMS00ZjdkLTkwMTEtNGU1NDg3NDQ0Yzk1XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
        "releaseDate": "1996-04-05",
        "synopsis": "Minnesota car salesman Jerry Lundegaard's inept crime falls apart due to his and his henchmen's bungling and the persistent police work of the quite pregnant Marge Gunderson.",
        "directors": [
            "Joel Coen",
            "Ethan Coen"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Underground": {
        "name": "Underground",
        "boxOffice": "171082",
        "budget": "N/A",
        "cast": [
            "Predrag 'Miki' Manojlovic",
            "Lazar Ristovski",
            "Mirjana Jokovic"
        ],
        "countries": [
            "Federal Republic of Yugoslavia",
            "France",
            "Germany",
            "Bulgaria",
            "Czech Republic",
            "Hungary",
            "United Kingdom",
            "United States"
        ],
        "duration": "167",
        "genres": [
            "Comedy",
            "Drama",
            "Fantasy"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BNzI4YTVmMWEtMWQ3MS00OGE1LWE5YjMtNjc4NWJmYjRmZTQyXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg",
        "releaseDate": "1997-06-20",
        "synopsis": "A group of Serbian socialists prepares for the war in a surreal underground filled by parties, tragedies, love, and hate.",
        "directors": [
            "Emir Kusturica"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "La haine": {
        "name": "La haine",
        "boxOffice": "280859",
        "budget": "N/A",
        "cast": [
            "Vincent Cassel",
            "Hubert Kound\u00e9",
            "Sa\u00efd Taghmaoui"
        ],
        "countries": [
            "France"
        ],
        "duration": "98",
        "genres": [
            "Crime",
            "Drama"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BOTQxOGU0OWUtMzExYy00ZjIxLWJmMzAtNTI1Y2YxYTMxN2RkXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg",
        "releaseDate": "1996-02-23",
        "synopsis": "24 hours in the lives of three young men in the French suburbs the day after a violent riot.",
        "directors": [
            "Mathieu Kassovitz"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Dilwale Dulhania Le Jayenge": {
        "name": "Dilwale Dulhania Le Jayenge",
        "boxOffice": "N/A",
        "budget": "N/A",
        "cast": [
            "Shah Rukh Khan",
            "Kajol",
            "Amrish Puri"
        ],
        "countries": [
            "India"
        ],
        "duration": "181",
        "genres": [
            "Drama",
            "Romance"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BMDQ2ZmE2NTMtZDE3NC00YzFjLWJhNmEtMDEzMTI5ZjU2ZGM0XkEyXkFqcGdeQXVyNTkzNDQ4ODc@._V1_SX300.jpg",
        "releaseDate": "1995-10-20",
        "synopsis": "When Raj meets Simran in Europe, it isn't love at first sight but when Simran moves to India for an arranged marriage, love makes its presence felt.",
        "directors": [
            "Aditya Chopra"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Before Sunrise": {
        "name": "Before Sunrise",
        "boxOffice": "5535405",
        "budget": "N/A",
        "cast": [
            "Ethan Hawke",
            "Julie Delpy",
            "Andrea Eckert"
        ],
        "countries": [
            "United States",
            "Austria"
        ],
        "duration": "101",
        "genres": [
            "Drama",
            "Romance"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BZDdiZTAwYzAtMDI3Ni00OTRjLTkzN2UtMGE3MDMyZmU4NTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
        "releaseDate": "1995-01-27",
        "synopsis": "A young man and woman meet on a train in Europe, and wind up spending one evening together in Vienna. Unfortunately, both know that this will probably be their only night together.",
        "directors": [
            "Richard Linklater"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Chungking Express": {
        "name": "Chungking Express",
        "boxOffice": "600200",
        "budget": "N/A",
        "cast": [
            "Brigitte Lin",
            "Takeshi Kaneshiro",
            "Tony Leung Chiu-wai"
        ],
        "countries": [
            "Hong Kong"
        ],
        "duration": "102",
        "genres": [
            "Comedy",
            "Crime",
            "Drama"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BNmEyYzUwYTMtYTNiNS00YWE4LWIxZTEtNTVlZDBlNmQ4NGE2XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg",
        "releaseDate": "1996-03-08",
        "synopsis": "Two melancholy Hong Kong policemen fall in love: one with a mysterious female underworld figure, the other with a beautiful and ethereal waitress at a late-night restaurant he frequents.",
        "directors": [
            "Kar-Wai Wong"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Jurassic Park": {
        "name": "Jurassic Park",
        "boxOffice": "404214720",
        "budget": "N/A",
        "cast": [
            "Sam Neill",
            "Laura Dern",
            "Jeff Goldblum"
        ],
        "countries": [
            "United States"
        ],
        "duration": "127",
        "genres": [
            "Action",
            "Adventure",
            "Sci-Fi"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BMjM2MDgxMDg0Nl5BMl5BanBnXkFtZTgwNTM2OTM5NDE@._V1_SX300.jpg",
        "releaseDate": "1993-06-11",
        "synopsis": "A pragmatic paleontologist touring an almost complete theme park on an island in Central America is tasked with protecting a couple of kids after a power failure causes the park's cloned dinosaurs to run loose.",
        "directors": [
            "Steven Spielberg"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "In the Name of the Father": {
        "name": "In the Name of the Father",
        "boxOffice": "25096862",
        "budget": "N/A",
        "cast": [
            "Daniel Day-Lewis",
            "Pete Postlethwaite",
            "Alison Crosbie"
        ],
        "countries": [
            "Ireland",
            "United Kingdom"
        ],
        "duration": "133",
        "genres": [
            "Biography",
            "Crime",
            "Drama"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BMmYyOTgwYWItYmU3Ny00M2E2LTk0NWMtMDVlNmQ0MWZiMTMxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
        "releaseDate": "1994-02-25",
        "synopsis": "A man's coerced confession to an I.R.A. bombing he did not commit results in the imprisonment of his father as well. An English lawyer fights to free them.",
        "directors": [
            "Jim Sheridan"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Raise the Red Lantern": {
        "name": "Raise the Red Lantern",
        "boxOffice": "2603061",
        "budget": "N/A",
        "cast": [
            "Gong Li",
            "Jingwu Ma",
            "Saifei He"
        ],
        "countries": [
            "Hong Kong",
            "China"
        ],
        "duration": "125",
        "genres": [
            "Drama",
            "Romance"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BNDMxMTc2N2ItMjI5Ny00MGFiLThkOTYtZTIyYTZhMzA2NjIzXkEyXkFqcGdeQXVyNjc3MjQzNTI@._V1_SX300.jpg",
        "releaseDate": "1991-12-18",
        "synopsis": "A young woman becomes the fourth wife of a wealthy lord, and must learn to live with the strict rules and tensions within the household.",
        "directors": [
            "Yimou Zhang"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Dead Poets Society": {
        "name": "Dead Poets Society",
        "boxOffice": "95860116",
        "budget": "N/A",
        "cast": [
            "Robin Williams",
            "Robert Sean Leonard",
            "Ethan Hawke"
        ],
        "countries": [
            "United States"
        ],
        "duration": "128",
        "genres": [
            "Comedy",
            "Drama"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BOGYwYWNjMzgtNGU4ZC00NWQ2LWEwZjUtMzE1Zjc3NjY3YTU1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
        "releaseDate": "1989-06-09",
        "synopsis": "Maverick teacher John Keating uses poetry to embolden his boarding school students to new heights of self-expression.",
        "directors": [
            "Peter Weir"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "The Princess Bride": {
        "name": "The Princess Bride",
        "boxOffice": "30857814",
        "budget": "N/A",
        "cast": [
            "Cary Elwes",
            "Mandy Patinkin",
            "Robin Wright"
        ],
        "countries": [
            "United States"
        ],
        "duration": "98",
        "genres": [
            "Adventure",
            "Comedy",
            "Family"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BYzdiOTVjZmQtNjAyNy00YjA2LTk5ZTAtNmJkMGQ5N2RmNjUxXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg",
        "releaseDate": "1987-10-09",
        "synopsis": "A bedridden boy's grandfather reads him the story of a farmboy-turned-pirate who encounters numerous obstacles, enemies and allies in his quest to be reunited with his true love.",
        "directors": [
            "Rob Reiner"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Stand by Me": {
        "name": "Stand by Me",
        "boxOffice": "52287414",
        "budget": "N/A",
        "cast": [
            "Wil Wheaton",
            "River Phoenix",
            "Corey Feldman"
        ],
        "countries": [
            "United States"
        ],
        "duration": "89",
        "genres": [
            "Adventure",
            "Drama"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BODJmY2Y2OGQtMDg2My00N2Q3LWJmZTUtYTc2ODBjZDVlNDlhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
        "releaseDate": "1986-08-22",
        "synopsis": "After the death of one of his friends, a writer recounts a childhood journey with his friends to find the body of a missing boy.",
        "directors": [
            "Rob Reiner"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Platoon": {
        "name": "Platoon",
        "boxOffice": "138530565",
        "budget": "N/A",
        "cast": [
            "Charlie Sheen",
            "Tom Berenger",
            "Willem Dafoe"
        ],
        "countries": [
            "United States",
            "United Kingdom"
        ],
        "duration": "120",
        "genres": [
            "Drama",
            "War"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BMzRjZjdlMjQtODVkYS00N2YzLWJlYWYtMGVlN2E5MWEwMWQzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
        "releaseDate": "1987-02-06",
        "synopsis": "Chris Taylor, a neophyte recruit in Vietnam, finds himself caught in a battle of wills between two sergeants, one good and the other evil. A shrewd examination of the brutality of war and the duality of man in conflict.",
        "directors": [
            "Oliver Stone"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Paris, Texas": {
        "name": "Paris, Texas",
        "boxOffice": "2181987",
        "budget": "N/A",
        "cast": [
            "Harry Dean Stanton",
            "Nastassja Kinski",
            "Dean Stockwell"
        ],
        "countries": [
            "West Germany",
            "France",
            "United Kingdom",
            "United States"
        ],
        "duration": "145",
        "genres": [
            "Drama"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BM2RjMmU3ZWItYzBlMy00ZmJkLWE5YzgtNTVkODdhOWM3NGZhXkEyXkFqcGdeQXVyNDA5Mjg5MjA@._V1_SX300.jpg",
        "releaseDate": "1984-08-23",
        "synopsis": "Travis Henderson, an aimless drifter who has been missing for four years, wanders out of the desert and must reconnect with society, himself, his life, and his family.",
        "directors": [
            "Wim Wenders"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Nausica\u00e4 of the Valley of the Wind": {
        "name": "Nausica\u00e4 of the Valley of the Wind",
        "boxOffice": "495770",
        "budget": "N/A",
        "cast": [
            "Sumi Shimamoto",
            "Mahito Tsujimura",
            "Hisako Ky\u00f4da"
        ],
        "countries": [
            "Japan"
        ],
        "duration": "117",
        "genres": [
            "Animation",
            "Adventure",
            "Sci-Fi"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BZTI3NmJmYTQtNDg4NS00M2VlLTgzZDAtZWIwZDcyOWY5YzIzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
        "releaseDate": "1987-11-25",
        "synopsis": "Warrior and pacifist Princess Nausica\u00e4 desperately struggles to prevent two warring nations from destroying themselves and their dying planet.",
        "directors": [
            "Hayao Miyazaki"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "The Thing": {
        "name": "The Thing",
        "boxOffice": "19629760",
        "budget": "N/A",
        "cast": [
            "Kurt Russell",
            "Wilford Brimley",
            "Keith David"
        ],
        "countries": [
            "United States",
            "Canada"
        ],
        "duration": "109",
        "genres": [
            "Horror",
            "Mystery",
            "Sci-Fi"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BNGViZWZmM2EtNGYzZi00ZDAyLTk3ODMtNzIyZTBjN2Y1NmM1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
        "releaseDate": "1982-06-25",
        "synopsis": "A research team in Antarctica is hunted by a shape-shifting alien that assumes the appearance of its victims.",
        "directors": [
            "John Carpenter"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Pink Floyd: The Wall": {
        "name": "Pink Floyd: The Wall",
        "boxOffice": "22244207",
        "budget": "N/A",
        "cast": [
            "Bob Geldof",
            "Christine Hargreaves",
            "James Laurenson"
        ],
        "countries": [
            "United Kingdom"
        ],
        "duration": "95",
        "genres": [
            "Drama",
            "Fantasy",
            "Music"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BMzYwMDZlZDktNGVlMC00OWVlLWI0MTktN2UwNTUxOWI1NjJhXkEyXkFqcGdeQXVyMzg1ODEwNQ@@._V1_SX300.jpg",
        "releaseDate": "1982-09-17",
        "synopsis": "A confined but troubled rock star descends into madness in the midst of his physical and social isolation from everyone.",
        "directors": [
            "Alan Parker"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Fitzcarraldo": {
        "name": "Fitzcarraldo",
        "boxOffice": "N/A",
        "budget": "N/A",
        "cast": [
            "Klaus Kinski",
            "Claudia Cardinale",
            "Jos\u00e9 Lewgoy"
        ],
        "countries": [
            "West Germany",
            "Peru"
        ],
        "duration": "158",
        "genres": [
            "Adventure",
            "Drama"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BYjIzNTYxMTctZjAwNS00YzI3LWExMGMtMGQxNGM5ZTc1NzhlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
        "releaseDate": "1982-10-10",
        "synopsis": "The story of Brian Sweeney Fitzgerald, an extremely determined man who intends to build an opera house in the middle of a jungle.",
        "directors": [
            "Werner Herzog"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Fanny and Alexander": {
        "name": "Fanny and Alexander",
        "boxOffice": "6783304",
        "budget": "N/A",
        "cast": [
            "Bertil Guve",
            "Pernilla Allwin",
            "Kristina Adolphson"
        ],
        "countries": [
            "Sweden",
            "France",
            "West Germany"
        ],
        "duration": "188",
        "genres": [
            "Drama"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BZmQzMDE5ZWQtOTU3ZS00ZjdhLWI0OTctZDNkODk4YThmOTRhL2ltYWdlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg",
        "releaseDate": "1982-12-17",
        "synopsis": "Two young Swedish children in the 1900s experience the many comedies and tragedies of their lively and affectionate theatrical family, the Ekdahls.",
        "directors": [
            "Ingmar Bergman"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Blade Runner": {
        "name": "Blade Runner",
        "boxOffice": "32914489",
        "budget": "N/A",
        "cast": [
            "Harrison Ford",
            "Rutger Hauer",
            "Sean Young"
        ],
        "countries": [
            "United States"
        ],
        "duration": "117",
        "genres": [
            "Action",
            "Drama",
            "Sci-Fi"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BNzQzMzJhZTEtOWM4NS00MTdhLTg0YjgtMjM4MDRkZjUwZDBlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
        "releaseDate": "1982-06-25",
        "synopsis": "A blade runner must pursue and terminate four replicants who stole a ship in space and have returned to Earth to find their creator.",
        "directors": [
            "Ridley Scott"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "The Elephant Man": {
        "name": "The Elephant Man",
        "boxOffice": "26010864",
        "budget": "N/A",
        "cast": [
            "Anthony Hopkins",
            "John Hurt",
            "Anne Bancroft"
        ],
        "countries": [
            "United States",
            "United Kingdom"
        ],
        "duration": "124",
        "genres": [
            "Biography",
            "Drama"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BMDVjNjIwOGItNDE3Ny00OThjLWE0NzQtZTU3YjMzZTZjMzhkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
        "releaseDate": "1980-10-10",
        "synopsis": "A Victorian surgeon rescues a heavily disfigured man who is mistreated while scraping a living as a side-show freak. Behind his monstrous fa\u00e7ade, there is revealed a person of kindness, intelligence and sophistication.",
        "directors": [
            "David Lynch"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "The Deer Hunter": {
        "name": "The Deer Hunter",
        "boxOffice": "48979328",
        "budget": "N/A",
        "cast": [
            "Robert De Niro",
            "Christopher Walken",
            "John Cazale"
        ],
        "countries": [
            "United States",
            "United Kingdom"
        ],
        "duration": "183",
        "genres": [
            "Drama",
            "War"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BNDhmNTA0ZDMtYjhkNS00NzEzLWIzYTItOGNkMTVmYjE2YmI3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
        "releaseDate": "1979-02-23",
        "synopsis": "An in-depth examination of the ways in which the Vietnam War impacts and disrupts the lives of several friends in a small steel mill town in Pennsylvania.",
        "directors": [
            "Michael Cimino"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Rocky": {
        "name": "Rocky",
        "boxOffice": "117235147",
        "budget": "N/A",
        "cast": [
            "Sylvester Stallone",
            "Talia Shire",
            "Burt Young"
        ],
        "countries": [
            "United States"
        ],
        "duration": "120",
        "genres": [
            "Drama",
            "Sport"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BNTBkMjg2MjYtYTZjOS00ODQ0LTg0MDEtM2FiNmJmOGU1NGEwXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg",
        "releaseDate": "1976-12-03",
        "synopsis": "A small-time Philadelphia boxer gets a supremely rare chance to fight the world heavyweight champion in a bout in which he strives to go the distance for his self-respect.",
        "directors": [
            "John G. Avildsen"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Network": {
        "name": "Network",
        "boxOffice": "23689877",
        "budget": "N/A",
        "cast": [
            "Faye Dunaway",
            "William Holden",
            "Peter Finch"
        ],
        "countries": [
            "United States"
        ],
        "duration": "121",
        "genres": [
            "Drama"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BNzY0NjU5ODUtOTAzMC00NTU5LWJkZjctYWMyOWY2MTZmOWM1XkEyXkFqcGdeQXVyMTI3ODAyMzE2._V1_SX300.jpg",
        "releaseDate": "1976-11-27",
        "synopsis": "A television network cynically exploits a deranged former anchor's ravings and revelations about the news media for its own profit, but finds that his message may be difficult to control.",
        "directors": [
            "Sidney Lumet"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Barry Lyndon": {
        "name": "Barry Lyndon",
        "boxOffice": "N/A",
        "budget": "N/A",
        "cast": [
            "Ryan O'Neal",
            "Marisa Berenson",
            "Patrick Magee"
        ],
        "countries": [
            "United Kingdom",
            "United States"
        ],
        "duration": "185",
        "genres": [
            "Adventure",
            "Drama",
            "War"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BNmY0MWY2NDctZDdmMi00MjA1LTk0ZTQtZDMyZTQ1NTNlYzVjXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg",
        "releaseDate": "1975-12-18",
        "synopsis": "An Irish rogue wins the heart of a rich widow and assumes her dead husband's aristocratic position in 18th-century England.",
        "directors": [
            "Stanley Kubrick"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Mirror": {
        "name": "Mirror",
        "boxOffice": "22168",
        "budget": "N/A",
        "cast": [
            "Margarita Terekhova",
            "Filipp Yankovskiy",
            "Ignat Daniltsev"
        ],
        "countries": [
            "Soviet Union"
        ],
        "duration": "107",
        "genres": [
            "Biography",
            "Drama"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BOGRiNDc0ZmMtZWVmNS00ZmRkLWEwNjQtODdmYTIyZGJjMjc5XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
        "releaseDate": "1975-03-07",
        "synopsis": "A dying man in his forties remembers his past. His childhood, his mother, the war, personal moments and things that tell of the recent history of all the Russian nation.",
        "directors": [
            "Andrei Tarkovsky"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Paper Moon": {
        "name": "Paper Moon",
        "boxOffice": "N/A",
        "budget": "N/A",
        "cast": [
            "Ryan O'Neal",
            "Tatum O'Neal",
            "Madeline Kahn"
        ],
        "countries": [
            "United States"
        ],
        "duration": "102",
        "genres": [
            "Comedy",
            "Crime",
            "Drama"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BOWVmYzQwY2MtOTBjNi00MDNhLWI5OGMtN2RiMDYxODI3MjU5XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg",
        "releaseDate": "1973-05-09",
        "synopsis": "During the Great Depression, a con man finds himself saddled with a young girl who may or may not be his daughter, and the two forge an unlikely partnership.",
        "directors": [
            "Peter Bogdanovich"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "On Solace: Video Essay for Cries and Whispers": {
        "name": "On Solace: Video Essay for Cries and Whispers",
        "boxOffice": "N/A",
        "budget": "N/A",
        "cast": [
            "N/A"
        ],
        "countries": [
            "United States"
        ],
        "duration": "13",
        "genres": [
            "Documentary",
            "Short"
        ],
        "image": "N/A",
        "releaseDate": "2015-03-31",
        "synopsis": "N/A",
        "directors": [
            "Kogonada"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Solaris": {
        "name": "Solaris",
        "boxOffice": "22168",
        "budget": "N/A",
        "cast": [
            "Natalya Bondarchuk",
            "Donatas Banionis",
            "J\u00fcri J\u00e4rvet"
        ],
        "countries": [
            "Soviet Union"
        ],
        "duration": "167",
        "genres": [
            "Drama",
            "Mystery",
            "Sci-Fi"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BZmY4Yjc0OWQtZDRhMy00ODc2LWI2NGYtMWFlODYyN2VlNDQyXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
        "releaseDate": "1972-09-26",
        "synopsis": "A psychologist is sent to a station orbiting a distant planet in order to discover what has caused the crew to go insane.",
        "directors": [
            "Andrei Tarkovsky"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Le Samoura\u00ef": {
        "name": "Le Samoura\u00ef",
        "boxOffice": "39481",
        "budget": "N/A",
        "cast": [
            "Alain Delon",
            "Fran\u00e7ois P\u00e9rier",
            "Nathalie Delon"
        ],
        "countries": [
            "France",
            "Italy"
        ],
        "duration": "101",
        "genres": [
            "Crime",
            "Drama"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BODJlZjg1NmQtNGE4MS00YTNiLWEzN2ItYTZiYjJmZTBiMWI4XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg",
        "releaseDate": "1967-10-25",
        "synopsis": "After professional hitman Jef Costello is seen by witnesses his efforts to provide himself an alibi drive him further into a corner.",
        "directors": [
            "Jean-Pierre Melville"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Cool Hand Luke": {
        "name": "Cool Hand Luke",
        "boxOffice": "N/A",
        "budget": "N/A",
        "cast": [
            "Paul Newman",
            "George Kennedy",
            "Strother Martin"
        ],
        "countries": [
            "United States"
        ],
        "duration": "127",
        "genres": [
            "Crime",
            "Drama"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BNjcwNTQ3Y2EtMjdmZi00ODBhLWFhNzQtOTc3MWU5NTZlMDViXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg",
        "releaseDate": "1967-11-01",
        "synopsis": "A laid back Southern man is sentenced to two years in a rural prison, but refuses to conform.",
        "directors": [
            "Stuart Rosenberg"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Persona": {
        "name": "Persona",
        "boxOffice": "N/A",
        "budget": "N/A",
        "cast": [
            "Bibi Andersson",
            "Liv Ullmann",
            "Margaretha Krook"
        ],
        "countries": [
            "Sweden"
        ],
        "duration": "83",
        "genres": [
            "Drama",
            "Thriller"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BYmFlOTcxMWUtZTMzMi00NWIyLTkwOTEtNjIxNmViNzc2Yzc1XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg",
        "releaseDate": "1967-03-16",
        "synopsis": "A nurse is put in charge of a mute actress and finds that their personae are melding together.",
        "directors": [
            "Ingmar Bergman"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Andrei Rublev": {
        "name": "Andrei Rublev",
        "boxOffice": "124189",
        "budget": "N/A",
        "cast": [
            "Anatoliy Solonitsyn",
            "Ivan Lapikov",
            "Nikolay Grinko"
        ],
        "countries": [
            "Soviet Union"
        ],
        "duration": "205",
        "genres": [
            "Biography",
            "Drama",
            "History"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BNjM2MjMwNzUzN15BMl5BanBnXkFtZTgwMjEzMzE5MTE@._V1_SX300.jpg",
        "releaseDate": "1973-10-01",
        "synopsis": "The life, times and afflictions of the fifteenth-century Russian iconographer St. Andrei Rublev.",
        "directors": [
            "Andrei Tarkovsky"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "The Battle of Algiers": {
        "name": "The Battle of Algiers",
        "boxOffice": "879794",
        "budget": "N/A",
        "cast": [
            "Brahim Hadjadj",
            "Jean Martin",
            "Yacef Saadi"
        ],
        "countries": [
            "Italy",
            "Algeria"
        ],
        "duration": "121",
        "genres": [
            "Drama",
            "War"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BN2M4YTA4ZTEtN2EyNy00YTlmLWE4YzYtYjYyYjRkMWM4ZDM0XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg",
        "releaseDate": "1967-09-20",
        "synopsis": "In the 1950s, fear and violence escalate as the people of Algiers fight for independence from the French government.",
        "directors": [
            "Gillo Pontecorvo"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "What Ever Happened to Baby Jane?": {
        "name": "What Ever Happened to Baby Jane?",
        "boxOffice": "N/A",
        "budget": "N/A",
        "cast": [
            "Bette Davis",
            "Joan Crawford",
            "Victor Buono"
        ],
        "countries": [
            "United States"
        ],
        "duration": "134",
        "genres": [
            "Drama",
            "Horror",
            "Thriller"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BZmI0M2VmNTgtMWVhYS00Zjg1LTk1YTYtNmJmMjRkZmMwYTc2XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg",
        "releaseDate": "1962-10-31",
        "synopsis": "A former child star torments her paraplegic sister in their decaying Hollywood mansion.",
        "directors": [
            "Robert Aldrich"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Sanjuro": {
        "name": "Sanjuro",
        "boxOffice": "46808",
        "budget": "N/A",
        "cast": [
            "Toshir\u00f4 Mifune",
            "Tatsuya Nakadai",
            "Keiju Kobayashi"
        ],
        "countries": [
            "Japan"
        ],
        "duration": "96",
        "genres": [
            "Action",
            "Drama",
            "Thriller"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BZmY3MDlmODctYTY3Yi00NzYyLWIxNTUtYjVlZWZjMmMwZTBkXkEyXkFqcGdeQXVyMzAxNjg3MjQ@._V1_SX300.jpg",
        "releaseDate": "1963-05-07",
        "synopsis": "A crafty samurai helps a young man and his fellow clansmen trying to save his uncle, who has been framed and imprisoned by a corrupt superintendent.",
        "directors": [
            "Akira Kurosawa"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "The Man Who Shot Liberty Valance": {
        "name": "The Man Who Shot Liberty Valance",
        "boxOffice": "N/A",
        "budget": "N/A",
        "cast": [
            "James Stewart",
            "John Wayne",
            "Vera Miles"
        ],
        "countries": [
            "United States"
        ],
        "duration": "123",
        "genres": [
            "Drama",
            "Western"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BMGEyNzhkYzktMGMyZS00YzRiLWJlYjktZjJkOTU5ZDY0ZGI4XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg",
        "releaseDate": "1962-04-22",
        "synopsis": "A senator returns to a Western town for the funeral of an old friend and tells the story of his origins.",
        "directors": [
            "John Ford"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Ivan's Childhood": {
        "name": "Ivan's Childhood",
        "boxOffice": "22168",
        "budget": "N/A",
        "cast": [
            "Nikolay Burlyaev",
            "Valentin Zubkov",
            "Evgeniy Zharikov"
        ],
        "countries": [
            "Soviet Union"
        ],
        "duration": "95",
        "genres": [
            "Drama",
            "War"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BOGE5ZTMxNGEtZDQ4YS00ZmIxLTlhZGYtYjVjMzA3NTA2N2E2XkEyXkFqcGdeQXVyNDE5MTU2MDE@._V1_SX300.jpg",
        "releaseDate": "1963-06-27",
        "synopsis": "During WWII, Soviet orphan Ivan Bondarev strikes up a friendship with three sympathetic Soviet officers while working as a scout behind the German lines.",
        "directors": [
            "Andrei Tarkovsky",
            "Eduard Abalov"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "The Virgin Spring": {
        "name": "The Virgin Spring",
        "boxOffice": "N/A",
        "budget": "N/A",
        "cast": [
            "Max von Sydow",
            "Birgitta Valberg",
            "Gunnel Lindblom"
        ],
        "countries": [
            "Sweden"
        ],
        "duration": "89",
        "genres": [
            "Drama"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BNDgyNmMzYmYtYzAwZi00NGU4LWJjYmQtNzY0MmUyNDQ1NzBlXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg",
        "releaseDate": "1960-11-14",
        "synopsis": "In 14th-century Sweden, an innocent yet pampered teenage girl and her family's pregnant and jealous servant set out from their farm to deliver candles to church, but only one returns from events that transpire in the woods along t...",
        "directors": [
            "Ingmar Bergman"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Inherit the Wind": {
        "name": "Inherit the Wind",
        "boxOffice": "N/A",
        "budget": "N/A",
        "cast": [
            "Spencer Tracy",
            "Fredric March",
            "Gene Kelly"
        ],
        "countries": [
            "United States"
        ],
        "duration": "128",
        "genres": [
            "Biography",
            "Drama",
            "History"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BZjcwZjhlZmEtNjg3ZC00OTEwLWFjY2MtMDg2OTQwZWJmMGM3XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg",
        "releaseDate": "1960-08-30",
        "synopsis": "Based on a real-life case in 1925, two great lawyers argue the case for and against a Tennessee science teacher accused of the crime of teaching evolution.",
        "directors": [
            "Stanley Kramer"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "The 400 Blows": {
        "name": "The 400 Blows",
        "boxOffice": "509",
        "budget": "N/A",
        "cast": [
            "Jean-Pierre L\u00e9aud",
            "Albert R\u00e9my",
            "Claire Maurier"
        ],
        "countries": [
            "France"
        ],
        "duration": "99",
        "genres": [
            "Crime",
            "Drama"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BYTQ4MjA4NmYtYjRhNi00MTEwLTg0NjgtNjk3ODJlZGU4NjRkL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
        "releaseDate": "1959-11-16",
        "synopsis": "A young boy, left without attention, delves into a life of petty crime.",
        "directors": [
            "Fran\u00e7ois Truffaut"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Ben-Hur": {
        "name": "Ben-Hur",
        "boxOffice": "74432704",
        "budget": "N/A",
        "cast": [
            "Charlton Heston",
            "Jack Hawkins",
            "Stephen Boyd"
        ],
        "countries": [
            "United States"
        ],
        "duration": "212",
        "genres": [
            "Adventure",
            "Drama"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BNjgxY2JiZDYtZmMwOC00ZmJjLWJmODUtMTNmNWNmYWI5ODkwL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg",
        "releaseDate": "1959-11-18",
        "synopsis": "After a Jewish prince is betrayed and sent into slavery by a Roman friend in 1st-century Jerusalem, he regains his freedom and comes back for revenge.",
        "directors": [
            "William Wyler"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "The Hidden Fortress": {
        "name": "The Hidden Fortress",
        "boxOffice": "46808",
        "budget": "N/A",
        "cast": [
            "Toshir\u00f4 Mifune",
            "Misa Uehara",
            "Minoru Chiaki"
        ],
        "countries": [
            "Japan"
        ],
        "duration": "126",
        "genres": [
            "Action",
            "Adventure",
            "Drama"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BYjJkN2Y5MTktZDRhOS00NTUwLWFiMzEtMTVlNWU4ODM0Y2E5XkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg",
        "releaseDate": "1960-10-06",
        "synopsis": "Lured by gold, two greedy peasants unknowingly escort a princess and her general across enemy lines.",
        "directors": [
            "Akira Kurosawa"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Sweet Smell of Success": {
        "name": "Sweet Smell of Success",
        "boxOffice": "N/A",
        "budget": "N/A",
        "cast": [
            "Burt Lancaster",
            "Tony Curtis",
            "Susan Harrison"
        ],
        "countries": [
            "United States"
        ],
        "duration": "96",
        "genres": [
            "Drama",
            "Film-Noir"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BMjE5NTU3YWYtOWIxNi00YWZhLTg2NzktYzVjZWY5MDQ4NzVlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg",
        "releaseDate": "1957-07-04",
        "synopsis": "Powerful but unethical Broadway columnist J.J. Hunsecker coerces unscrupulous press agent Sidney Falco into breaking up his sister's romance with a jazz musician.",
        "directors": [
            "Alexander Mackendrick"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Nights of Cabiria": {
        "name": "Nights of Cabiria",
        "boxOffice": "766530",
        "budget": "N/A",
        "cast": [
            "Giulietta Masina",
            "Fran\u00e7ois P\u00e9rier",
            "Franca Marzi"
        ],
        "countries": [
            "Italy",
            "France"
        ],
        "duration": "110",
        "genres": [
            "Drama"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BOTdhNmUxZmQtNmMwNC00MzE3LWE1MTUtZDgxZTYwYjEzZjcwXkEyXkFqcGdeQXVyNTA1NjYyMDk@._V1_SX300.jpg",
        "releaseDate": "1957-10-16",
        "synopsis": "A waifish prostitute wanders the streets of Rome looking for true love but finds only heartbreak.",
        "directors": [
            "Federico Fellini"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    },
    "Throne of Blood": {
        "name": "Throne of Blood",
        "boxOffice": "46808",
        "budget": "N/A",
        "cast": [
            "Toshir\u00f4 Mifune",
            "Minoru Chiaki",
            "Isuzu Yamada"
        ],
        "countries": [
            "Japan"
        ],
        "duration": "110",
        "genres": [
            "Drama"
        ],
        "image": "https://m.media-amazon.com/images/M/MV5BNGYxZjA2M2ItYTRmNS00NzRmLWJkYzgtYTdiNGFlZDI5ZjNmXkEyXkFqcGdeQXVyNDE5MTU2MDE@._V1_SX300.jpg",
        "releaseDate": "1961-11-22",
        "synopsis": "A war-hardened general, egged on by his ambitious wife, works to fulfill a prophecy that he would become lord of Spider's Web Castle.",
        "directors": [
            "Akira Kurosawa"
        ],
        "createDate": "2023-05-30T08:15:00.144Z"
    }
}
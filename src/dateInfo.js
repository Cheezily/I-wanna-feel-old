// Wording: 'The time that has passed from'

const HAPPENINGS = {
  "2021": [
    "SpaceX sucessfully testing a Starship prototype",
    "Kabul falling to the Taliban",
    "the Tokyo Olympics finally being held"
  ],
  "2020": [
    "the death of Kobe Bryant",
    "the election of Joe Biden as U.S. President",
    "the rollout of the COVID-19 vaccines"
  ],
  "2019": [
    "the first appearance of the COVID-19 virus",
    "the first ever image of a black hole",
    "the mosque attacks in Christchurch, New Zealand"
  ],
  "2018": [
    "the wedding of Prince Harry and Meghan Markle",
    "U.S. President Trump meeting with Kim Jong Un in North Korea",
    "Sears filing for bankruptcy",
    "Toys 'R' Us filing for bankruptcy",
    "Bill Cosby heading to prison"
  ],
  "2017": [
    "Donald Trump being sworn in as U.S. President",
    "the Women's march on Washington",
    "the Harvey Weinstein allegations and the #MeToo movement"
  ],
  "2016": [
    "Britain voting to leave the European Union",
    "Donald Trump being elected U.S. President",
    "the outbreak of the Zika virus in Brazil",
    "the Pulse nightclub shooting in Orlando"
  ],
  "2015": [
    "Volkswagen is caught cheating on emissions output",
    "the Charlie Hebdo attack in Paris"
  ],
  "2014": [
    "the disappearance of Malaysian Air Flight 370",
    "pro-democracy protests erupting in Hong Kong",
    "Russia annexes Crimea from Ukraine"
  ],
  "2013": [
    "George Zimmerman being acquitted in the shooting of Trayvon Martin",
    "the U.S. Supreme Court legalizing gay marriage",
    "the Boston Marathon bombing"
  ],
  "2012": [
    "the Summer Olympics in London",
    "Xi Jinping is made president of China",
    "U.S. President Barack Obama being elected to a second term"
  ],
  "2011": [
    "the wedding of Prince William and Catherine Middleton",
    "the death of Apple co-founder Steve Jobs",
    "the death of North Korea leader Kim Jong-il",
  ],
  "2010": [
    "the Winter Olympics in Vancouver",
    "the 7.0-magnitude earthquake in Haiti",
    "the release of the first iPad",
    "the formation of British-Irish boyband One Direction"
  ],
  "2009": [
    "Minecraft receiving its first update by Mojang Studios",
    "the crash of Air France Flight 447",
    "the H1N1 swine flu outbreak"
  ],
  "2008": [
    "Cuban leader Fidel Castro stepping down",
    "the Summer Olympics being held in Beijing",
    "the election of Barack Obama as U.S. President",
    "the Global Financial Crisis"
  ],
  "2007": [
    "the relase of the Pixar film Ratatouille",
    "the debut of the tv show Big Bang Theory",
    "the release of Windows Vista",
    "the release of the first iPhone",
    "the start of the subprime mortgage crisis"
  ],
  "2006": [
    "the release of the Nintendo Wii",
    "the first flight of the Lockheed Martin F-35",
    "the release of the Blu-ray disc format",
    "the death of Steve Irwin off the coast of Australia"
  ],
  "2005": [
    "the debut of Avatar: The Last Airbender on Nickelodeon",
    "the debut of the American version of The Office on NBC",
    "the release of Star Wars: Episode III"
  ],
  "2004": [
    "U.S. President George W. Bush winning reelection",
    "the revelation of the Abu Ghraib prisoner abuse",
    "the airing of the final episode of Friends",
    "the death of U.S. President Ronald Reagan",
  ],
  "2003": [
    "the start of the U.S.-led Iraq War",
    "Martha Stewart being indicted for insider trading",
    "the release of the first Pirates of the Caribbean movie",
    "the launch of the social netowrk Myspace",
    "the destruction of the Space Shuttle Columbia"
  ],
  "2002": [
    "Kelly Clarkson winning the first American Idol",
    "the release of the Disney film Lilo & Stitch"
  ],
  "2001": [
    "George W. Bush being sworn in as U.S. President",
    "the death of NASCAR legend Dale Earnhardt",
    "the 9/11 attacks on the United States",
  ],
  "2000": [
    "George W. Bush is elected as U.S. President",
    "the bursting of the Dot-Com Bubble"
  ],
  "1999": [
    "the debut of SpongeBob SquarePants",
    "the Y2K panic",
    "the Columbine High School massacre",
    "the creation of the Euro"
  ],
  "1998": [
    "the founding of Google",
    "the release of the Disney film Mulan",
    "the release of Windows 98",
    "the Monica Lewinsky Scandal"
  ],
  "1997": [
    "the death of Princess Diana",
    "the mass-suicide of the Heaven's Gate cult",
    "the first Harry Potter book is published"
  ],
  "1996": [
    "the divorce of Prince Charles and Diana",
    "the release of the Nintendo 64",
    "U.S. President Bill Clinton wins reelection"
  ],
  "1995": [
    "the launch of the History Channel",
    "the Oklahoma City bombing",
    "the release of Windows 95"
  ],
  "1994": [
    "the election of Nelson Mandella in South Africa",
    "OJ Simpson flees from the police in a White Ford Bronco",
    "the first episode of Friends airs on NBC",
    "the release of the first Playstation",
    "the release of Forrest Gump in theaters"
  ],
  "1993": [
    "the U.S. government siege in Waco, TX",
    "Intel releasing the first Pentium chips",
    "the release of Jurassic Park in theaters",
    "the death of Audrey Hepburn"
  ],
  "1992": [
    "Jay Leno taking over the Tonight Show",
    "Bill Clinton being elected U.S. President",
    "Microsoft releasing Windows 3.1",
    "the release of the game Mortal Kombat",
    "the Rodney King riots in Los Angeles"
  ],
  "1991": [
    "Operation Desert Storm in Iraq",
    "the fall of the Soviet Union",
    "the filmed beating of Rodney King by the LAPD",
    "the release of the first Sonic the Hedgehog game"
  ],
  "1990": [
    "Microsoft releasing Windows 3.0",
    "the launch of the Hubble Space Telescope",
    "the opening of Universal Studios in Florida",
    "Iraq's invasion of Kuwait"
  ],
  "1989": [
    "the fall of the Berlin Wall",
    "the release of the Nintendo Game Boy",
    "the execution of serial killer Ted Bundy",
    "the Soviet Red Army withdrawal from Afghanistan",
  ],
  "1988": [
    "the election of U.S. President George H.W. Bush",
    "the Iran-Contra Affair",
    "the bombing of Pan Am Flight 103",
    "the release of Die Hard"
  ],
  "1987": [
    "'The Simpsons' debut on the Tracy Ullman Show",
    "the Fox television network first going on the air",
    "Ronald Reagan's Berlin Wall speech"
  ],
  "1986": [
    "the Chernobyl nuclear reactor explodes in the USSR",
    "the Space Shuttle Challenger disaster",
    "the debut of the Oprah Winfrey Show"
  ],
  "1985": [
    "The first version of Microsoft Windows was released",
    "the failed release of New Coke",
    "the debut of Calvin and Hobbes",
    "the release of Super Mario Brothers"
  ],
  "1984": [
    "the release of the first Apple Macintosh",
    "Ronald Reagan wins reelection as U.S. President",
    "the release of Purple Rain by Prince"
  ],
  "1983": [
    "the launch of the first mobile phone by Motorola",
    "the opening of the first HIV/AIDS hospital in the U.S.",
    "Sally Ride becomming the first American woman in space",
    "the Soviet downing of Korean Air Lines Flight 007"
  ],
  "1982": [
    "the introduction of the first CD players",
    "the release of Thriller by Michael Jackson",
    "the debut of Late Night with David Letterman on NBC"
  ],
  "1981": [
    "MTV first going on the air",
    "the first AIDS cases being identified",
    "the wedding of Prince Charles and Diana Spencer",
    "the first launch of the Space Shuttle"
  ],
  "1980": [
    "the release of Star Wars: The Empire Strikes Back",
    "the election of U.S. President Ronald Reagan",
    "the debut of the Rubik's Cube",
    "the introduction of Pac-Man"
  ],
  "1979": [
    "the Iran hostage crisis",
    "the release of Star Trek: The Motion Picture",
    "McDonalds' introduction of the Happy Meal",
    "the Soviet Union's invasion of Afghanistan"
  ],
  "1978": [
    "the debut of the first Garfield comic strip",
    "the release of the film Grease",
    "the arrest of serial killer John Wayne Gacy"
  ],
  "1977": [
    "the release of Star Wars: A New Hope",
    "the launch of the Apple II computer",
    "the death of Elvis Presley"
  ],
  "1976": [
    "the founding of Apple Computer Company",
    "the unveiling of the first Space Shuttle",
    "the United States celebrating its Bicentennial",
    "the election of U.S. President Jimmy Carter"
  ],
  "1975": [
    "the release of Betamax and VHS",
    "the release of Jaws in theaters",
    "the founding of Microsoft",
    "the fall of Saigon, ending the Vietnam War"
  ],
  "1974": [
    "the resignation of U.S. President Richard Nixon",
    "'Rumble in the Jungle' between Muhammad Ali and George Foreman",
    "Steven King publishing his first novel 'Carrie'",
  ],
  "1973": [
    "the OPEC-led embargo leading to the Oil Crisis",
    "the release of The Exorcist in theaters",
    "Roe v. Wade legalizes abortion in the U.S."
  ],
  "1972": [
    "the uncovering of the Watergate Scandal",
    "the SALT I talks taking place between the USA and USSR",
  ],
  "1971": [
    "the openning of Disney World in Orlando",
    "the debut of the Nasdaq stock exchange",
    "the creation of Federal Express (FedEx)",
    "the Attica Prison Riots"
  ],
  "1970": [
    "the breakup of the Beatles",
    "the launch of Apollo 13",
    "the first flight of the Boeing 747"
  ],
  "1969": [
    "the first man walking on the moon",
    "the Beatles release of 'Abbey Road'",
    "the debut of ARPANET, the forerunner of the internet",
    "the Woodstock music festival"
  ],
  "1968": [
    "the Prague Spring and invasion by the Soviet Union",
    "the release of '2001: A Space Odyssey'",
    "the assassination of Martin Luther King Jr.",
    "the assassination of Robert Kennedy",
  ],
  "1967": [
    "the release of 'Sgt. Pepper's Lonely Hearts Club Band'",
    "Jimmy Hoffa beginning his 8-year prison sentence",
    "McDonald's introducing the Big Mac"
  ],
  "1966": [
    "the Vietnam War international days of protest",
    "the debut of the Batman tv series on ABC",
    "the debut of Star Trek on NBC"
  ],
  "1965": [
    "the completion of the Gateway Arch in St. Louis",
    "the Sound of Music is released in theaters",
    "Martin Luther King, Jr. marches from Selma to Montgomery",
    "the Watts Riots in Los Angeles"
  ],
  "1964": [
    "the U.S. government authorizes the Vietnam War",
    "the Warren Commission report the JFK assassination",
    "Lyndon B. Johnson signing the Civil Rights Act",
    "Martin Luther King, Jr receiving the Nobel Peace Prize"
  ],
  "1963": [
    "the assassination of JFK",
    "ZIP codes being introduced in the U.S.",
    "Beatlemania sweeping the U.S."
  ],
  "1962": [
    "John Glenn becoming the first American in space",
    "the Cuban Missile Crisis",
    "Marilyn Monroe singing Happy Birthday To President Kennedy"
  ],
  "1961": [
    "the failed Bay of Pigs invasion",
    "Yuri Gagarin becoming the first human in space",
    "the construction of the Berlin Wall",
    "John F. Kennedy becoming U.S. President"
  ],
  "1960": [
    "John F. Kennedy is elected U.S. President",
    "the Soviet Union shootdown of a U2 spy plane",
    "the U.S. announces soldiers being sent to Vietnam",
    "the first televised U.S. Presidential Debate"
  ],
  "1959": [
    "Fidel Castro takes power in Cuba",
    "Hawaii becoming the 50th U.S. state",
    "Alaska becoming the 49th U.S. state",
  ],
  "1958": [
    "the creation of NASA",
    "the release of Vertigo in theaters",
    "the introduction of the hula hoop"
  ],
  "1957": [
    "the USSR launches Sputnik 1",
    "the final episode of I Love Lucy"
  ],
  "1956": [
    "the release of The Ten Commandments in theaters",
    "Dwight D. Eisenhower winning reelection as U.S. President",
  ],
  "1955": [
    "distribution of Jonas Salk's Polio vaccine",
    "the debut of The Mickey Mouse Club on ABC",
    "Rosa Parks in arrested in Montgomery, Alabama"
  ],
  "1954": [
    "the end of McCarthyism in the U.S.",
    "the Brown v. Board of Education Decision in the U.S.",
    "Texas Instruments introduces the first transistor radio"
  ],
  "1953": [
    "the end of the Korean War",
    "Dwight D. Eisenhower becoming U.S. President",
    "the death of Joseph Stalin"
  ],
  "1952": [
    "the coronation of Queen Elizabeth II",
    "the introduction of Mr. Potato Head",
    "Mother Theresa opens the Home for the Dying in Calcutta",
    "the U.S. tests the first hydrogen bomb"
  ],
  "1951": [
    "the debut of I Love Lucy on CBS",
    "the creation of the first birth control pill",
    "the release of Disney's Alice in Wonderland"
  ],
  "1950": [
    "the start of the Korean War",
    "Diner's Club issuing the first credit card",
    "Joseph McCarthy starting the Second Red Scare"
  ],
  "1949": [
    "the agreement of the Geneva Convention",
    "the release of Orwell's Nineteen Eighty-Four",
    "Mao Zedong establishing the People's Republic of China"
  ],
  "1948": [
    "the Berlin Airlift",
    "the murder of Mahatma Gandhi",
    "Isreal being declared an independent state",
  ],
  "1947": [
    "the Roswell UFO incident",
    "the start of the Cold War",
    "the first tv broadcast of the World Series",
    "Chuck Yeager breaking the sound barrier"
  ],
  "1946": [
    "the first meeting of the United Nations",
    "the debut of ENIAC, the first general-purpose computer",
    "Churchill's 'Iron Curtain' speech"
  ],
  "1945": [
    "the atomic bomb being dropped on Hiroshima and Nagasaki",
    "the end of World War II",
    "the death of Franklin D. Roosevelt"
  ],
  "1944": [
    "France being liberated from Nazi occupation",
    "the D-Day invasion of Normandy",
    "Franklin D. Roosevelt's reelection as U.S. President"
  ],
  "1943": [
    "the Allies' invasion of Italy",
    "the Battle of Stalingrad",
    "the death of Nikola Tesla"
  ],
  "1942": [
    "the Battle of Midway",
    "the release of the Disney film Bambi",
    "the release of Casablanca in theaters"
  ],
  "1941": [
    "the Japanese attack on Pearl Harbor",
    "Nazi Germany's invasion of the Soviet Union",
    "the release of Citizen Kane in theaters"
  ],
  "1940": [
    "the evacuation of Dunkirk",
    "Nazi Germany and Italy forming an alliance",
    "Franklin D. Roosevelt's reelection as U.S. President",
    "Nylon stockings going on sale"
  ],
  "1939": [
    "Nazi Germany's invasion of Poland",
    "the release of Gone with the Wind in theaters",
    "the release of The Wizard of Oz in theaters",
  ],
  "1938": [
    "the broadcast of Orson Welles' War of the Worlds",
    "the first appearance of Superman in Action Comics #1"
  ],
  "1937": [
    "the disappearance of Amelia Earhart",
    "the release of Disney's Snow White",
    "the Hindenburg bursts into flames in New Jersey"
  ],
  "1936": [
    "Jesse Owens winning 4 golds at the Berlin Olympics",
    "the debut of the comic strip The Phantom"
  ],
  "1935": [
    "the completion of the Hoover Dam",
    "President Roosevelt signing the US Social Security Act",
    "Babe Ruth hitting his final home run"
  ],
  "1934": [
    "the crime spree of John Dillinger comes to an end",
    "the crime spree of Bonnie & Clyde comes to an end",
    "the introduction of Donald Duck"
  ],
  "1933": [
    "the repeal of prohibition in the U.S.",
    "Adolph Hitler coming to power in Germany",
    "Franklin D. Roosevelt's becoming U.S. President'"
  ],
  "1932": [
    "the Charles Lindbergh baby kidnapping",
    "Mahatma Gandhi going on hunger strike",
    "the debut of Buck Rogers of the 25th Century"
  ],
  "1931": [
    "the completion of the Empire State Building",
    "Al Capone being sentenced for tax evasion",
    "Warner Bros debuting Merrie Melodies"
  ],
  "1930": [
    "the Mickey Mouse comic strip makes its debut",
    "the start of the Great Depression",
    "the debut of Betty Boop",
  ],
  "1929": [
    "the Wall Street Crash",
    "the first Academy Awards",
    "Herbert Hoover being sworn in as U.S. President"
  ],
  "1928": [
    "the first Mickey Mouse cartoon, Steamboat Willie",
    "the discovery of penicillin"
  ],
  "1927": [
    "Charles Lindbergh's transatlantic flight",
    "the release of the Ford Model A",
    "work starting on Mount Rushmore",
    "Joseph Stalin taking control of the Soviet Union"
  ],
  "1926": [
    "the death of Harry Houdini",
    "the introduction of the 40 hour work week",
    "the Al Capone turf wars"
  ],
  "1925": [
    "the first motel being opened in the U.S.",
    "The Great Gatsby being published",
    "the Scopes Monkey Trial"
  ],
  "1924": [
    "Ellis Island being closed as an immigration hub",
    "the completion of the Wrigley Building in Chicago",
    "the first Winter Olympics in Chamonix, France"
  ],
  "1923": [
    "the opening of the original Yankee Stadium",
    "the founding of Warner Brothers",
    "the first issue of Time Magazine",
    "Calvin Coolidge becoming U.S. President"
  ],
  "1922": [
    "the Soviet Union is established",
    "the first issue of Reader's Digest",
    "the creation of the British Broadcasting Company"
  ],
  "1921": [
    "Babe Ruth breaking the home run record",
    "Warren G. Harding becoming U.S. President"
  ],
  "1920": [
    "The first League of Nations assembly in Paris",
    "the start of prohibition in the U.S.",
    "Babe Ruth being traded to the Yankees",
    "women being granted the right to vote in the U.S.",
  ],
  "1919": [
    "the signing of the Treaty of Versailles",
    "the creation of the League of Nations",
  ],
  "1918": [
    "the end of World War I",
    "the start of the Spanish Flu epidemic"
  ],
  "1917": [
    "the beginning of the Russian Revolution",
  ],
  "1916": [
    "the murder of Rasputin",
    "the Battle of the Somme in World War I"
  ],
  "1915": [
    "the sinking of the Lusitania",
    "the first transcontinental phone call in the U.S."
  ],
  "1914": [
    "the start of World War I",
    "the opening of the Panama Canal",
  ],
  "1913": [
    "the creation of the crossword puzzle",
    "the creation of the first assembly line"
  ],
  "1912": [
    "the creation of Stainless Steel",
    "the sinking of the Titanic",
    "the abdication of the last emperor of China",
    "the founding of the Girl Scouts of America"
  ],
  "1911": [
    "the first airmail flight",
    "the first International Women's Day",
    "the Triangle Shirtwaist Factory fire"
  ],
  "1910": [
    "slavery being outlawed in China",
    "George V becoming King of the United Kingdom",
    "the founding of the Boy Scouts of America"
  ],
  "1909": [
    "the first expidition to the North Pole",
    "the foundation of the NAACP in the U.S."
  ],
  "1908": [
    "the introduction of the Ford Model T",
    "the first New Years Eve ball drop in Times Square"
  ],
  "1907": [
    "the first taxicabs in London",
    "Oklahoma becoming a U.S. state"
  ],
  "1906": [
    "Morse Code 'SOS' being adopted",
    "the RMS Lusitania is launched",
    "the first German U-Boat is launched"
  ],
  "1905": [
    "Russia's defeat in the Russo-Japanese War",
    "Albert Einstein completes his doctoral dissertation"
  ],
  "1904": [
    "the 3rd modern Olympic Games in St. Louis",
    "Long Acre Square being renamed Times Square in NYC"
  ],
  "1903": [
    "the introduction of Crayola Crayons",
    "the first baseball World Series",
    "the foundation of the Ford Motor Company"
  ],
  "1902": [
    "the opening of the first movie theater",
    "the creation of the Teddy Bear",
    "the first J.C. Penney store opening"
  ],
  "1901": [
    "Theodore Roosevelt becoming U.S. President",
    "the incorporation of U.S. Steel"
  ],
  "1900": [
    "the first bus service launches in New York City",
    "the U.S. currency being put on the gold standard",
    "Hawaii becoming a U.S. territory"
  ],
  "1899": ["Thing that happened in 1899"],
  "1898": ["Thing that happened in 1898"],
  "1897": ["Thing that happened in 1897"],
  "1896": ["Thing that happened in 1896"],
  "1895": ["Thing that happened in 1895"],
  "1894": ["Thing that happened in 1894"],
  "1893": ["Thing that happened in 1893"],
  "1892": ["Thing that happened in 1892"],
  "1891": ["Thing that happened in 1891"],
  "1890": ["Thing that happened in 1890"],
  "1889": ["Thing that happened in 1889"],
  "1888": ["Thing that happened in 1888"],
  "1887": ["Thing that happened in 1887"],
  "1886": ["Thing that happened in 1886"],
  "1885": ["Thing that happened in 1885"],
  "1884": [
    "Alaska becoming a U.S. Territory",
  ],
  "1883": [
    "the grand opening of the Brooklyn Bridge",
    "the debut of Buffalo Bill's Wild West Show"
  ],
  "1882": [
    "outlaw Jesse James being shot in the back",
    "the creation of the first power plant by Thomas Edison"
  ],
  "1881": [
    "Phoenix, Arizona being incorporated",
    "the American Red Cross being established",
    "the gunfight at the O.K. Corral"
  ],
  "1880": [
    "the installation of the first street light",
    "the election of U.S. President James Garfield"
  ],
  "1879": [
    "milk first being sold in glass bottles",
    'Doc Holliday killing his first man'
  ],
  "1878": [
    "the invention of the phonograph"
  ],
  "1877": [
    "the election of U.S. President Rutherford B. Hayes",
    "the first telephones were installed"
  ],
  "1876": [
    "the first phone call being made by Alexander Graham Bell",
    "Wyatt Earp starting work in Dodge City"
  ],
  "1875": [
    "the first running of the Kentucky Derby"
  ],
  "1874": [
    "the annexation of the Bronx by New York",
    "the invention of barbed wire",
    "the invention of the typewriter with a QWERTY keyboard"
  ],
  "1873": [
    "slaves being freed in Puerto Rico",
    "the first U.S. post card being issued",
    "the fisrt show of P.T. Barnum's circus"
  ],
  "1872": [
    "the birth of future U.S. President Calvin Coolidge",
    "the election of U.S. President Ulysses S. Grant"
  ],
  "1871": [
    "the first Major League Baseball game is played",
    "the birth of Winston Churchill"
  ],  
  "1870": [
    "John D. Rockefeller founding Standard Oil",
    "the Franco-Prussian War",
    "the creation of the Japanese yen"
  ],
  "1869": [
    "the creation of the periodic table",
    "Ulysses S. Grant being sworn in as U.S. President",
    "the first American football game between Rutgers and Priceton"
  ],
  "1868": [
    "Wyoming becoming a U.S. territory",
    "the ratification of the Fourteenth Amendment in the U.S.",
    "the U.K. ending the act of public hanging"
  ],
  "1867": [
    "Nebraska becoming the 37th U.S. state",
    "the end of the U.K. transporting prisoners to Australia",
    "the first Canadian federal election"
  ],
  "1866": [
    "the first meeting of the Canadian Parliament",
    "Tennessee becoming the first state to rejoin the Union",
  ],
  "1865": [
    "the assassination of Abraham Lincoln",
    "the end of the American Civil War",
  ],
  "1864": [
    "the founding of Heineken brewery in the Netherlands",
    "General William T. Sherman's assault on Atlanta.",
    "Nevada becoming a U.S. state"
  ],
  "1863": [
    "Abraham Lincoln signing the Emancipation Proclamation",
    "Arizona becoming a U.S. territory",
    "the organiztion of the Idaho Territory in the U.S."
  ],
  "1862": [
    "West Virginia becoming part of the Union",
    "the creation of the Gatling gun",
  ],
  "1861": [
    "Colorado being organized as a U.S. territory",
    "Czar Alexander II of Russia ends serfdom",
    "Abraham Lincoln being sworn in as U.S. President"
  ],
  "1860": [
    "the Pony Express begins its first run",
    "Abraham Lincoln being selected as the Republican Party candidate",
  ],
  "1859": [
    "Big Ben, the Great Clock at the Palace of Westminster, is started",
    "the playing of the first game of baseball",
  ],
  "1858": [
    "Minnesota being admitted a U.S. state",
    "the first transatlantic telegraph message",
  ],
  "1857": [
    "the birth of the 12th Dali Lama",
  ],
  "1857": [
    "the incorporation of Dallas, Texas",
    "the birth of Booker T. Washington"
  ],
}


function getEarliestYear() {
  return parseInt(Object.keys(HAPPENINGS)[0])
}


function getHappenings(birthYear) {
  let output = []
  let yearSkip = 5
  let currentYear = new Date().getFullYear()
  let age = currentYear - birthYear
  let doubleYourAge = currentYear - age * 2

  for(let i = age - 4; i > 0; i = i - yearSkip) {
    let laterYear = i + birthYear
    let beforeBirthYear = (2 * birthYear) - (currentYear - i)

    output.push([
      {
        year: laterYear,
        happening: HAPPENINGS[laterYear][Math.floor(Math.random() * HAPPENINGS[laterYear].length)]
      },
      {
        year: beforeBirthYear,
        happening: HAPPENINGS[beforeBirthYear][Math.floor(Math.random() * HAPPENINGS[beforeBirthYear].length)]
      }
    ])

    yearSkip += 3
  }

  output.push([
    {
      year: birthYear,
      happening: "Your Birth"
    },
    {
      year: doubleYourAge,
      happening: HAPPENINGS[doubleYourAge][Math.floor(Math.random() * HAPPENINGS[doubleYourAge].length)]
    }
  ])

  return output
}

export { getEarliestYear, getHappenings }










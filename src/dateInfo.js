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
    "the release of the first Playstation"
  ],
  "1993": [
    "the U.S. government siege in Waco, TX"
  ],
  "1992": ["Thing that happened in 1992"],
  "1991": ["Thing that happened in 1991"],
  "1990": ["Thing that happened in 1990"],
  "1989": [
    "the fall of the Berlin Wall",
    "the release of the Nintendo Game Boy"
  ],
  "1988": [
    "the election of U.S. President George H.W. Bush",
  ],
  "1987": [
    "'The Simpsons' debut on the Tracy Ullman Show",
    "the Fox television network first going on the air"
  ],
  "1986": [
    "the Chernobyl nuclear reactor explodes in the USSR",
    "the Space Shuttle Challenger disaster"
  ],
  "1985": [
    "The first version of Microsoft Windows was released",
    
  ],
  "1984": [
    "the Winter Olympics in Sarajevo, Yugoslavia",
    ""
  ],
  "1983": [
    "the introduction of the first cellular phone",
    ""
  ],
  "1982": [
    "CD players first hitting the market",
  ],
  "1981": [
    "MTV first going on the air",
    "the first AIDS cases are identified"
  ],
  "1980": [
    "the American boycott of the Moscow Olympics",
    "the election of U.S. President Ronald Reagan",
    "the debut of the Rubik's Cube",
    "the introduction of Pac-Man"
  ],
  "1979": ["Thing that happened in 1979"],
  "1978": ["Thing that happened in 1978"],
  "1977": ["Thing that happened in 1977"],
  "1976": ["Thing that happened in 1976"],
  "1975": ["Thing that happened in 1975"],
  "1974": ["Thing that happened in 1974"],
  "1973": ["Thing that happened in 1973"],
  "1972": ["Thing that happened in 1972"],
  "1971": ["Thing that happened in 1971"],
  "1970": ["Thing that happened in 1970"],
  "1969": ["Thing that happened in 1969"],
  "1968": ["Thing that happened in 1968"],
  "1967": ["Thing that happened in 1967"],
  "1966": ["Thing that happened in 1966"],
  "1965": ["Thing that happened in 1965"],
  "1964": ["Thing that happened in 1964"],
  "1963": ["Thing that happened in 1963"],
  "1962": ["Thing that happened in 1962"],
  "1961": ["Thing that happened in 1961"],
  "1960": ["Thing that happened in 1960"],
  "1959": ["Thing that happened in 1959"],
  "1958": ["Thing that happened in 1958"],
  "1957": ["Thing that happened in 1957"],
  "1956": ["Thing that happened in 1956"],
  "1955": ["Thing that happened in 1955"],
  "1954": ["Thing that happened in 1954"],
  "1953": ["Thing that happened in 1953"],
  "1952": ["Thing that happened in 1952"],
  "1951": ["Thing that happened in 1951"],
  "1950": ["Thing that happened in 1950"],
  "1949": ["Thing that happened in 1949"],
  "1948": ["Thing that happened in 1948"],
  "1947": ["Thing that happened in 1947"],
  "1946": ["Thing that happened in 1946"],
  "1945": ["Thing that happened in 1945"],
  "1944": ["Thing that happened in 1944"],
  "1943": ["Thing that happened in 1943"],
  "1942": ["Thing that happened in 1942"],
  "1941": ["Thing that happened in 1941"],
  "1940": ["Thing that happened in 1940"],
  "1939": ["Thing that happened in 1939"],
  "1938": ["Thing that happened in 1938"],
  "1937": ["Thing that happened in 1937"],
  "1936": ["Thing that happened in 1936"],
  "1935": ["Thing that happened in 1935"],
  "1934": ["Thing that happened in 1934"],
  "1933": ["Thing that happened in 1933"],
  "1932": ["Thing that happened in 1932"],
  "1931": ["Thing that happened in 1931"],
  "1930": ["Thing that happened in 1930"],
  "1929": ["Thing that happened in 1929"],
  "1928": ["Thing that happened in 1928"],
  "1927": ["Thing that happened in 1927"],
  "1926": ["Thing that happened in 1926"],
  "1925": ["Thing that happened in 1925"],
  "1924": ["Thing that happened in 1924"],
  "1923": ["Thing that happened in 1923"],
  "1922": ["Thing that happened in 1922"],
  "1921": ["Thing that happened in 1921"],
  "1920": [
    "The first League of Nations assembly in Paris",
    "the first Red Scare in the United States",
    "Babe Ruth is traded to the Yankees"
  ],
  "1919": ["Thing that happened in 1919"],
  "1918": ["Thing that happened in 1918"],
  "1917": ["Thing that happened in 1917"],
  "1916": ["Thing that happened in 1916"],
  "1915": ["Thing that happened in 1915"],
  "1914": ["Thing that happened in 1914"],
  "1913": ["Thing that happened in 1913"],
  "1912": ["Thing that happened in 1912"],
  "1911": ["Thing that happened in 1911"],
  "1910": ["Thing that happened in 1910"],
  "1909": ["Thing that happened in 1909"],
  "1908": ["Thing that happened in 1908"],
  "1907": ["Thing that happened in 1907"],
  "1906": ["Thing that happened in 1906"],
  "1905": ["Thing that happened in 1905"],
  "1904": ["Thing that happened in 1904"],
  "1903": ["Thing that happened in 1903"],
  "1902": ["Thing that happened in 1902"],
  "1901": ["Thing that happened in 1901"],
  "1900": ["Thing that happened in 1900"],
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
    "Alaska becomming a U.S. Territory",
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
    "Nevada becomming a U.S. state"
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










// Wording: 'The time that has passed from'

const HAPPENINGS = {
  "2021": ["Thing that happened in 2021"],
  "2020": ["Thing that happened in 2020"],
  "2019": ["Thing that happened in 2019"],
  "2018": ["Thing that happened in 2018"],
  "2017": ["Thing that happened in 2017"],
  "2016": ["Thing that happened in 2016"],
  "2015": ["Thing that happened in 2015"],
  "2014": ["Thing that happened in 2014"],
  "2013": ["Thing that happened in 2013"],
  "2012": ["Thing that happened in 2012"],
  "2011": ["Thing that happened in 2011"],
  "2010": ["Thing that happened in 2010"],
  "2009": ["Thing that happened in 2009"],
  "2008": ["Thing that happened in 2008"],
  "2007": ["Thing that happened in 2007"],
  "2006": ["Thing that happened in 2006"],
  "2005": ["Thing that happened in 2005"],
  "2004": ["Thing that happened in 2004"],
  "2003": ["Thing that happened in 2003"],
  "2002": ["Thing that happened in 2002"],
  "2001": ["Thing that happened in 2001"],
  "2000": ["Thing that happened in 2000"],
  "1999": ["Thing that happened in 1999"],
  "1998": ["Thing that happened in 1998"],
  "1997": ["Thing that happened in 1997"],
  "1996": ["Thing that happened in 1996"],
  "1995": ["Thing that happened in 1995"],
  "1994": ["Thing that happened in 1994"],
  "1993": ["Thing that happened in 1993"],
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
    "Thing that happened in 1984",
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










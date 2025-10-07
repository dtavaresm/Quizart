const data = [
  {
    image: "https://uploads5.wikiart.org/images/will-barnet/cat-and-canary.jpg",
    artist: "Will Barnet",
    movement: "Pop Art",
    title: "Cat and Canary"
  },
  {
    image: "https://uploads6.wikiart.org/images/giotto/the-road-to-calvary.jpg",
    artist: "Giotto",
    movement: "Proto Renaissance",
    title: "The Road to Calvary"
  },
  {
    image: "https://uploads7.wikiart.org/images/giotto/st-francis-preaching-to-the-birds-1299.jpg",
    artist: "Giotto",
    movement: "Proto Renaissance",
    title: "St. Francis Preaching to the Birds"
  },
  {
    image: "https://uploads8.wikiart.org/images/giotto/the-miracle-of-the-spring-1299.jpg",
    artist: "Giotto",
    movement: "Proto Renaissance",
    title: "The Miracle of the Spring"
  },
  {
    image: "https://uploads0.wikiart.org/images/sandro-botticelli/the-triumph-of-mordecai-from-the-story-of-esther-1480(1).jpg",
    artist: "Sandro Botticelli",
    movement: "Renaissance",
    title: "The Triumph of Mordecai, from The Story of Esther"
  },
  {
    image: "https://uploads1.wikiart.org/00173/images/sandro-botticelli/sandro-botticelli-three-graces-in-primavera-1.jpg",
    artist: "Sandro Botticelli",
    movement: "Renaissance",
    title: "The Three Graces from Primavera"
  },
  {
    image: "https://uploads5.wikiart.org/images/hieronymus-bosch/temptation-of-st-anthony-3.jpg",
    artist: "Hieronymus Bosch",
    movement: "Renaissance",
    title: "Temptation of St. Anthony (detail)"
  },
  {
    image: "https://uploads8.wikiart.org/images/hieronymus-bosch/st-john-the-baptist-in-meditation-1499.jpg",
    artist: "Hieronymus Bosch",
    movement: "Renaissance",
    title: "St. John the Baptist in Meditation"
  },
  {
    image: "https://uploads6.wikiart.org/images/hieronymus-bosch/the-concert-in-the-egg-1480.jpg",
    artist: "Hieronymus Bosch",
    movement: "Renaissance",
    title: "The Concert in the Egg"
  },
  {
    image: "https://uploads3.wikiart.org/00129/images/jan-van-eyck/the-arnolfini-wedding.jpg",
    artist: "Jan van Eyck",
    movement: "Renaissance",
    title: "The Arnolfini Wedding"
  },
  {
    image: "https://uploads1.wikiart.org/images/jan-van-eyck/portrait-of-giovanni-arnolfini-1435.jpg",
    artist: "Jan van Eyck",
    movement: "Renaissance",
    title: "Portrait of Giovanni Arnolfini"
  },
  {
    image: "https://uploads6.wikiart.org/images/jan-van-eyck/the-lucca-madonna-1436.jpg",
    artist: "Jan van Eyck",
    movement: "Renaissance",
    title: "Lucca Madonna"
  },
  {
    image: "https://uploads0.wikiart.org/images/leonardo-da-vinci/mona-lisa.jpg",
    artist: "Leonardo da Vinci",
    movement: "Renaissance",
    title: "Mona Lisa"
  },
  {
    image: "https://uploads3.wikiart.org/00142/images/57726d85edc2cb3880b48ccd/leonardo-da-vinci-virgin-of-the-rocks-national-gallery-london.jpg",
    artist: "Leonardo da Vinci",
    movement: "Renaissance",
    title: "The Virgin of the Rocks"
  },
  {
    image: "https://uploads2.wikiart.org/images/albrecht-durer/pond-in-the-wood.jpg",
    artist: "Albrecht Dürer",
    movement: "Renaissance",
    title: "Pond in the wood"
  },
  {
    image: "https://uploads7.wikiart.org/images/albrecht-durer/hare-1528(1).jpg",
    artist: "Albrecht Dürer",
    movement: "Renaissance",
    title: "Hare"
  },
  {
    image: "https://uploads1.wikiart.org/00183/images/marinus-van-reymerswaele/marinus-van-reymerswale-007-1.jpg",
    artist: "Marinus van Reymerswaele",
    movement: "Renaissance",
    title: "The moneychanger and his wife"
  },
  {
    image: "https://uploads7.wikiart.org/00183/images/marinus-van-reymerswaele/7178189160-50b09cf2cf-b-1.jpg",
    artist: "Marinus van Reymerswaele",
    movement: "Renaissance",
    title: "The Misers"
  },
  {
    image: "https://uploads5.wikiart.org/images/william-turner/storm-seam-boat-off-a-harbour-s-mouth-making-signals-in-shallow-water-and-going-by-the-lead.jpg",
    artist: "J.M.W. Turner",
    movement: "Romanticism",
    title: "Snow Storm - Steamboat off a Harbour's Mouth"
  },
  {
    image: "https://uploads0.wikiart.org/images/william-turner/wreckers-coast-of-northumberland.jpg",
    artist: "J.M.W. Turner",
    movement: "Romanticism",
    title: "Wreckers Coast of Northumberland"
  },
  {
    image: "https://uploads8.wikiart.org/images/william-turner/the-shipwreck.jpg",
    artist: "J.M.W. Turner",
    movement: "Romanticism",
    title: "The Shipwreck"
  },
  {
    image: "https://uploads1.wikiart.org/images/francisco-goya/the-sleep-of-reason-produces-monsters-1799.jpg",
    artist: "Francisco Goya",
    movement: "Romanticism",
    title: "The sleep of reason produces monsters"
  },
  {
    image: "https://uploads5.wikiart.org/00380/images/francisco-goya/the-witches-flight-francisco-goya.jpg",
    artist: "Francisco Goya",
    movement: "Romanticism",
    title: "Witches in the Air"
  },
  {
    image: "https://uploads6.wikiart.org/00142/images/57726d7fedc2cb3880b480ca/francisco-de-goya-saturno-devorando-a-su-hijo-1819-1823.jpg",
    artist: "Francisco Goya",
    movement: "Romanticism",
    title: "Saturn Devouring One of His Sons"
  },
  {
    image: "https://uploads7.wikiart.org/00142/images/57726d7cedc2cb3880b47b1a/self-portrait-as-the-sick-bacchus-by-caravaggio.jpg",
    artist: "Caravaggio",
    movement: "Baroque",
    title: "Young Sick Bacchus"
  },
  {
    image: "https://uploads7.wikiart.org/00340/images/caravaggio/boy-peeling-fruit.jpg",
    artist: "Caravaggio",
    movement: "Baroque",
    title: "Boy Peeling Fruit"
  },
  {
    image: "https://uploads4.wikiart.org/images/joseph-wright/two-boys-fighting-over-a-bladder-1770.jpg",
    artist: "Joseph Wright",
    movement: "Baroque",
    title: "Two Boys Fighting over a Bladder"
  },
  {
    image: "https://uploads5.wikiart.org/images/joseph-wright/a-girl-reading-a-letter-with-an-old-man-reading-over-her-shoulder.jpg",
    artist: "Joseph Wright",
    movement: "Baroque",
    title: "A Girl reading a Letter, with an Old Man reading over her shoulder"
  },
  {
    image: "https://uploads5.wikiart.org/00380/images/jacques-louis-david/napoleon-jacques-louis-david.jpg",
    artist: "Jacques-Louis David",
    movement: "Neoclassicism",
    title: "Napoleon Crossing the Alps at the St Bernard Pass"
  },
  {
    image: "https://uploads6.wikiart.org/00380/images/jacques-louis-david/patrocles-jacques-louis-david.jpg",
    artist: "Jacques-Louis David",
    movement: "Neoclassicism",
    title: "Patroclus"
  },
  {
    image: "https://uploads1.wikiart.org/00142/images/jacques-louis-david/the-oath-of-horatii.jpg",
    artist: "Jacques-Louis David",
    movement: "Neoclassicism",
    title: "The Oath of Horatii"
  },
  {
    image: "https://uploads5.wikiart.org/images/edvard-munch/anxiety-1894.jpg",
    artist: "Edvard Munch",
    movement: "Expressionism",
    title: "Anxiety"
  },
  {
    image: "https://uploads1.wikiart.org/images/edvard-munch/death-in-the-sickroom-1893.jpg",
    artist: "Edvard Munch",
    movement: "Expressionism",
    title: "Death in the sickroom"
  },
  {
    image: "https://uploads8.wikiart.org/images/bram-bogart/yellow-green-1962.jpg",
    artist: "Bram Bogart",
    movement: "Excessivism",
    title: "Yellow & Green"
  },
  {
    image: "https://uploads7.wikiart.org/images/bram-bogart/lenasgarden-1983.jpg",
    artist: "Bram Bogart",
    movement: "Excessivism",
    title: "Lenasgarden"
  },
  {
    image: "https://uploads1.wikiart.org/00426/images/kaloust-guedel/v02a9803.jpg",
    artist: "Kaloust Guedel",
    movement: "Excessivism",
    title: "Unauthorized Stage of Tension"
  },
  {
    image: "https://uploads2.wikiart.org/00426/images/kaloust-guedel/red-white-blue-etcetera-78-x-55-2022.jpg",
    artist: "Kaloust Guedel",
    movement: "Excessivism",
    title: "Red White Blue Etcetera"
  },
  {
    image: "https://uploads1.wikiart.org/images/ai-weiwei/sunflower-seeds-2010.jpg",
    artist: "Ai Weiwei",
    movement: "Excessivism",
    title: "Sunflower Seeds"
  },
  {
    image: "https://uploads1.wikiart.org/images/ai-weiwei/forever-bicycles-2003.jpg",
    artist: "Ai Weiwei",
    movement: "Excessivism",
    title: "Forever (Bicycles)"
  },
  {
    image: "https://uploads1.wikiart.org/images/frank-auerbach/head-of-e-o-w-i.jpg",
    artist: "Frank Auerbach",
    movement: "Excessivism",
    title: "Head of E.O.W. I"
  },
  {
    image: "https://uploads3.wikiart.org/images/frank-auerbach/j-y-m-seated-no-1.jpg",
    artist: "Frank Auerbach",
    movement: "Excessivism",
    title: "J.Y.M. Seated No. 1"
  },
  {
    image: "https://uploads3.wikiart.org/images/jaroslav-serpan/sczujltnkffk-1962.jpg",
    artist: "Jaroslav Serpan",
    movement: "Art Informel",
    title: "Sczujltnkffk"
  },
  {
    image: "https://uploads3.wikiart.org/images/lucian-freud/the-painter-s-mother-resting-iii-1977.jpg",
    artist: "Lucian Freud",
    movement: "Expressionism",
    title: "The Painter's Mother Resting III"
  },
  {
    image: "https://uploads3.wikiart.org/images/avigdor-arikha/anne-in-shawl-and-dark-glasses-1979.jpg",
    artist: "Avigdor Arikha",
    movement: "Expressionism",
    title: "Anne in Shawl and Dark Glasses"
  },
  {
    image: "https://uploads6.wikiart.org/images/lucian-freud/eli-1.jpg",
    artist: "Lucian Freud",
    movement: "Expressionism",
    title: "Eli"
  },
  {
    image: "https://uploads4.wikiart.org/00354/images/beeple/inverted-dirt-15.png",
    artist: "Beeple",
    movement: "Digital Art",
    title: "Inverted Dirt"
  },
  {
    image: "https://uploads6.wikiart.org/00335/images/beeple/5000-days.jpeg",
    artist: "Beeple",
    movement: "Digital Art",
    title: "THE FIRST 5000 DAYS"
  },
  {
    image: "https://uploads7.wikiart.org/00323/images/simon-stolenkhag/tales-from-the-loop-7.jpg",
    artist: "Симон Столенхаг",
    movement: "Digital Art",
    title: "Tales from the Loop"
  },
  {
    image: "https://uploads0.wikiart.org/00319/images/simon-stolenkhag/sidensvansar1024-verge-super-wide.jpg",
    artist: "Симон Столенхаг",
    movement: "Digital Art",
    title: "Sidensvansar"
  },
  {
    image: "https://uploads7.wikiart.org/00263/images/kristoffer-zetterstrand/5.jpg",
    artist: "Kristoffer Zetterstrand",
    movement: "Digital Art",
    title: "The Source"
  },
  {
    image: "https://uploads5.wikiart.org/images/audrey-flack/kennedy-motorcade-1964.jpg",
    artist: "Audrey Flack",
    movement: "Photorealism",
    title: "Kennedy Motorcade"
  },
  {
    image: "https://uploads6.wikiart.org/images/ken-danby/boy-on-fence-1965.jpg",
    artist: "Ken Danby",
    movement: "Photorealism",
    title: "Boy on Fence"
  },
  {
    image: "https://uploads0.wikiart.org/images/charles-bell/sugar-daddy-gumball-x-1975.jpg",
    artist: "Charles Bell",
    movement: "Photorealism",
    title: "Sugar Daddy, Gumball X"
  },
  {
    image: "https://uploads5.wikiart.org/images/audrey-flack/wheel-of-fortune-1978.jpg",
    artist: "Audrey Flack",
    movement: "Photorealism",
    title: "Wheel of Fortune"
  },
  {
    image: "https://uploads3.wikiart.org/images/yves-klein/untitled-blue-monochrome-1956-1.jpg",
    artist: "Yves Klein",
    movement: "Minimalism",
    title: "Untitled Blue Monochrome"
  },
  {
    image: "https://uploads6.wikiart.org/images/lyman-kipp/untitled-sculptural-study.jpg",
    artist: "Lyman Kipp",
    movement: "Minimalism",
    title: "Untitled - Sculptural study"
  },
  {
    image: "https://uploads1.wikiart.org/images/mira-schendel/untitled-1963(1).jpg",
    artist: "Mira Schendel",
    movement: "Minimalism",
    title: "Untitled"
  },
  {
    image: "https://uploads0.wikiart.org/images/walter-darby-bannard/yellow-rose-1-1963.jpg",
    artist: "Walter Darby Bannard",
    movement: "Minimalism",
    title: "Yellow Rose #1"
  },
  {
    image: "https://uploads0.wikiart.org/images/leon-ferrari/western-christian-civilization-1965.jpg",
    artist: "León Ferrari",
    movement: "Conceptual Art",
    title: "Western Christian Civilization"
  },
  {
    image: "https://uploads3.wikiart.org/images/joseph-kosuth/one-and-three-lamps.jpg",
    artist: "Joseph Kosuth",
    movement: "Conceptual Art",
    title: "One and Three Lamps"
  },
  {
    image: "https://uploads4.wikiart.org/images/billy-apple/for-sale-1962.jpg",
    artist: "Billy Apple",
    movement: "Conceptual Art",
    title: "For Sale"
  },
  {
    image: "https://uploads8.wikiart.org/images/piero-manzoni/thumbprint-1960.jpg",
    artist: "Piero Manzoni",
    movement: "Conceptual Art",
    title: "Thumbprint"
  },
  {
    image: "https://uploads2.wikiart.org/images/giuseppe-pinot-gallizio/abolition-of-alienated-labor-made-in-collaboration-with-guy-debord-1959.jpg",
    artist: "Giuseppe Pinot-Gallizio",
    movement: "Conceptual Art",
    title: "Abolition of Alienated Labor (made in collaboration with Guy Debord)"
  },
  {
    image: "https://uploads1.wikiart.org/images/wassily-kandinsky/untitled-first-abstract-watercolor-1910.jpg",
    artist: "Wassily Kandinsky",
    movement: "Abstract Art",
    title: "Untitled (First abstract watercolor)"
  },
  {
    image: "https://uploads0.wikiart.org/images/jean-hugo/panneaux-de-signalisation-de-chemin-de-fer-1918.jpg",
    artist: "Jean Hugo",
    movement: "Abstract Art",
    title: "Panneaux de signalisation de chemin de fer"
  },
  {
    image: "https://uploads8.wikiart.org/images/lyubov-popova/painterly-architectonic.jpg",
    artist: "Liubov Popova",
    movement: "Abstract Art",
    title: "Painterly Architectonic"
  },
  {
    image: "https://uploads1.wikiart.org/images/georgia-o-keeffe/music-pink-and-blue-ii.jpg",
    artist: "Georgia O'Keeffe",
    movement: "Abstract Art",
    title: "Music Pink and Blue"
  },
  {
    image: "https://uploads6.wikiart.org/images/sonia-delaunay/portugese-still-life.jpg",
    artist: "Sonia Delaunay",
    movement: "Orphism",
    title: "Portugese Still Life"
  },
  {
    image: "https://uploads0.wikiart.org/images/sonia-delaunay/composition-red-blue-black-white.jpg",
    artist: "Sonia Delaunay",
    movement: "Orphism",
    title: "Composition Red, Blue, Black, White"
  },
  {
    image: "https://uploads3.wikiart.org/images/sonia-delaunay/rythme-1.jpg",
    artist: "Sonia Delaunay",
    movement: "Orphism",
    title: "Rythme"
  },
  {
    image: "https://uploads1.wikiart.org/images/sonia-delaunay/flamenco-dancer.jpg",
    artist: "Sonia Delaunay",
    movement: "Orphism",
    title: "Flamenco dancer"
  },
  {
    image: "https://uploads2.wikiart.org/images/francis-picabia/self-portrait-1.jpg",
    artist: "Francis Picabia",
    movement: "Kitsch",
    title: "Self Portrait"
  },
  {
    image: "https://uploads3.wikiart.org/images/francis-picabia/dances-at-the-spring-1912.jpg",
    artist: "Francis Picabia",
    movement: "Orphism",
    title: "Dances at the Spring"
  },
  {
    image: "https://uploads7.wikiart.org/images/francis-picabia/machine-turn-quickly.jpg",
    artist: "Francis Picabia",
    movement: "Dada",
    title: "Machine Turn Quickly"
  },
  {
    image: "https://uploads8.wikiart.org/00205/images/luis-ricardo-falero/falero-luis-ricardo-moon-nymph.jpg",
    artist: "Luis Ricardo Falero",
    movement: "Kitsch",
    title: "Moon Nymph"
  },
  {
    image: "https://uploads0.wikiart.org/00257/images/cassius-marcellus-coolidge/1890s-ad-pope-manufacturing-co-3041142.jpg",
    artist: "Cassius Marcellus Coolidge",
    movement: "Kitsch",
    title: 'Advertisement for Pope Manufacturing Co "We are Having a Heavenly Time"'
  },
  {
    image: "https://uploads0.wikiart.org/00205/images/luis-ricardo-falero/la-pose-by-luis-riccardo-falero.jpg",
    artist: "Luis Ricardo Falero",
    movement: "Kitsch",
    title: "La Pose"
  },
  {
    image: "https://uploads1.wikiart.org/images/august-macke/colored-composition-hommage-to-johann-sebastian-bachh.jpg",
    artist: "August Macke",
    movement: "Orphism",
    title: "August Macke"
  },
  {
    image: "https://uploads6.wikiart.org/images/paul-klee/once-emerged-from-the-gray-of-night-1918(1).jpg",
    artist: "Paul Klee",
    movement: "Abstract Art",
    title: "Once Emerged from the Gray of Night"
  },
  {
    image: "https://uploads7.wikiart.org/images/gustav-klimt/water-nymphs-silverfish.jpg",
    artist: "Gustav Klimt",
    movement: "Symbolism",
    title: "Water Nymphs (Silverfish)"
  },
  {
    image: "https://uploads7.wikiart.org/00475/images/gustav-klimt/judith-and-the-head-of-holofernes-1901.jpg",
    artist: "Gustav Klimt",
    movement: "Art nouveau",
    title: "Judit I"
  },
  {
    image: "https://uploads0.wikiart.org/00475/images/gustav-klimt/attersee-1900.jpg",
    artist: "Gustav Klimt",
    movement: "Symbolism",
    title: "Attersee"
  },
  {
    image: "https://uploads2.wikiart.org/images/gustav-klimt/fishblood.jpg",
    artist: "Gustav Klimt",
    movement: "Symbolism",
    title: "Fishblood"
  },
  {
    image: "https://uploads7.wikiart.org/images/piet-mondrian/avond-evening-the-red-tree-1910.jpg",
    artist: "Piet Mondrian",
    movement: "Neo-Impressionism",
    title: "Avond (Evening): The Red Tree"
  },
  {
    image: "https://uploads5.wikiart.org/images/piet-mondrian/mill-of-heeswijk-sun.jpg",
    artist: "Piet Mondrian",
    movement: "Impressionism",
    title: "Mill of Heeswijk Sun"
  },
  {
    image: "https://uploads3.wikiart.org/images/piet-mondrian/broadway-boogie-woogie-1943.jpg",
    artist: "Piet Mondrian",
    movement: "Neoplasticism",
    title: "Broadway Boogie-Woogie"
  },
  {
    image: "https://uploads2.wikiart.org/images/bart-van-der-leck/still-life-bowl-with-apples-1921.jpg",
    artist: "Bart van der Leck",
    movement: "Neoplasticism",
    title: "Still life (Bowl with apples)"
  },
  {
    image: "https://uploads3.wikiart.org/images/georges-vantongerloo/komposition-aus-dem-ovoid-1918.jpg",
    artist: "Georges Vantongerloo",
    movement: "Neoplasticism",
    title: "Komposition aus dem Ovoid"
  },
  {
    image: "https://uploads5.wikiart.org/images/theo-van-doesburg/composition-with-window-with-coloured-glass-iii-1917.jpg",
    artist: "Theo van Doesburg",
    movement: "Neoplasticism",
    title: "Composition with window with coloured glass III"
  },
  {
    image: "https://uploads8.wikiart.org/images/theo-van-doesburg/a-dog-1899.jpg",
    artist: "Theo van Doesburg",
    movement: "Post-Impressionism",
    title: "A dog"
  },
  {
    image: "https://uploads2.wikiart.org/images/theo-van-doesburg/dune-landscape.jpg",
    artist: "Theo van Doesburg",
    movement: "Post-Impressionism",
    title: "Dune landscape"
  },
  {
    image: "https://uploads4.wikiart.org/images/theo-van-doesburg/girl-with-buttercups-1914.jpg",
    artist: "Theo van Doesburg",
    movement: "Abstract Art",
    title: "Girl with Buttercups"
  },
  {
    image: "https://uploads5.wikiart.org/images/theo-van-doesburg/simultaneous-composition-xxiv-1929.jpg",
    artist: "Theo van Doesburg",
    movement: "Neoplasticism",
    title: "Simultaneous Composition XXIV"
  },
  {
    image: "https://uploads8.wikiart.org/images/theo-van-doesburg/simultaneous-counter-composition-1930.jpg",
    artist: "Theo van Doesburg",
    movement: "Neoplasticism",
    title: "Simultaneous Counter Composition."
  },
  {
    image: "https://uploads4.wikiart.org/images/bart-van-der-leck/composition-1918.jpg",
    artist: "Bart van der Leck",
    movement: "Neoplasticism",
    title: "Composition"
  },
  {
    image: "https://uploads4.wikiart.org/images/jean-arp/frond-and-navel.jpg",
    artist: "Hans Arp",
    movement: "Surrealism",
    title: "Frond and navel"
  },
  {
    image: "https://uploads4.wikiart.org/images/jean-arp/frond-and-navel.jpg",
    artist: "Hans Arp",
    movement: "Surrealism",
    title: "Frond and navel"
  },
  {
    image: "https://uploads2.wikiart.org/images/jean-arp/constellations.jpg",
    artist: "Hans Arp",
    movement: "Surrealism",
    title: "Constellations"
  },
  {
    image: "https://uploads3.wikiart.org/images/wassily-kandinsky/color-study-squares-with-concentric-circles-1913(1).jpg",
    artist: "Wassily Kandinsky",
    movement: "Abstract Art",
    title: "Color Study: Squares with Concentric Circles"
  },
  {
    image: "https://uploads5.wikiart.org/images/wassily-kandinsky/old-town-ii-1902.jpg",
    artist: "Wassily Kandinsky",
    movement: "Post-Impressionism",
    title: "Old town II"
  },
  {
    image: "https://uploads7.wikiart.org/images/wassily-kandinsky/kochel-waterfall-i.jpg",
    artist: "Wassily Kandinsky",
    movement: "Post-Impressionism",
    title: "Kochel: Waterfall I"
  },
  {
    image: "https://uploads1.wikiart.org/00253/images/wassily-kandinsky/76.jpg",
    artist: "Wassily Kandinsky",
    movement: "Impressionism",
    title: "Odessa. Port"
  },
  {
    image: "https://uploads2.wikiart.org/00165/images/robert-falk/falk-rr-naturmort-na-beloy-skaterti.jpg",
    artist: "Robert Falk",
    movement: "Cubism",
    title: "Still life on a white tablecloth"
  },
  {
    image: "https://uploads4.wikiart.org/images/paul-cezanne/forest-1894.jpg",
    artist: "Paul Cézanne",
    movement: "Cubism",
    title: "Forest"
  },
  {
    image: "https://uploads6.wikiart.org/images/paul-cezanne/mont-sainte-victoire-3.jpg",
    artist: "Paul Cézanne",
    movement: "Post-Impressionism",
    title: "Mont Sainte-Victoire"
  },
  {
    image: "https://uploads2.wikiart.org/images/paul-cezanne/large-bathers-1900.jpg",
    artist: "Paul Cézanne",
    movement: "Post-Impressionism",
    title: "Large Bathers"
  },
  {
    image: "https://uploads1.wikiart.org/images/paul-cezanne/still-life-with-bottle-and-apple-basket-1894.jpg",
    artist: "Paul Cézanne",
    movement: "Post-Impressionism",
    title: "Basket of Apples"
  },
  {
    image: "https://uploads4.wikiart.org/images/pablo-picasso/bust-of-young-woman-from-avignon-1907.jpg",
    artist: "Pablo Picasso",
    movement: "Cubism",
    title: "Bust of young woman from Avignon"
  },
  {
    image: "https://uploads2.wikiart.org/00198/images/pablo-picasso/old-guitarist-chicago.jpg",
    artist: "Pablo Picasso",
    movement: "Expressionism",
    title: "Vieux guitariste aveugle"
  },
  {
    image: "https://uploads8.wikiart.org/images/pablo-picasso/cat-catching-a-bird-1939.jpg",
    artist: "Pablo Picasso",
    movement: "Surrealism",
    title: "Cat catching a bird"
  },
  {
    image: "https://uploads5.wikiart.org/images/pablo-picasso/child-with-dove-1901.jpg",
    artist: "Pablo Picasso",
    movement: "Post-Impressionism",
    title: "Child with dove"
  },
  {
    image: "https://uploads7.wikiart.org/images/andre-derain/landscape-1907.jpg",
    artist: "André Derain",
    movement: "Cubism",
    title: "Landscape"
  },
  {
    image: "https://uploads2.wikiart.org/images/georges-braque/big-trees-at-estaque-1908.jpg",
    artist: "Georges Braque",
    movement: "Cubism",
    title: "Big trees at Estaque"
  },
  {
    image: "https://uploads0.wikiart.org/images/louis-valtat/a-tree-in-the-garden-1896.jpg",
    artist: "Louis Valtat",
    movement: "Fauvism",
    title: "A Tree in the Garden"
  },
  {
    image: "https://uploads5.wikiart.org/images/armand-guillaumin/la-campagne-1895.jpg",
    artist: "Armand Guillaumin",
    movement: "Fauvism",
    title: "À la campagne"
  },
  {
    image: "https://uploads0.wikiart.org/images/maurice-de-vlaminck/at-the-bar.jpg",
    artist: "Maurice de Vlaminck",
    movement: "Fauvism",
    title: "The Bar Counter"
  },
  {
    image: "https://uploads2.wikiart.org/images/henri-matisse/open-window-collioure-1905.jpg",
    artist: "Henri Matisse",
    movement: "Fauvism",
    title: "Open Window, Collioure"
  },
  {
    image: "https://uploads8.wikiart.org/images/henri-matisse/standing-model.jpg",
    artist: "Henri Matisse",
    movement: "Fauvism",
    title: "Standing Model"
  },
  {
    image: "https://uploads5.wikiart.org/images/albert-marquet/life-class-at-the-cole-des-beaux-arts-fauvist-nude-1898.jpg",
    artist: "Albert Marquet",
    movement: "Fauvism",
    title: "Life Class at the École des Beaux-Arts "
  },
  {
    image: "https://uploads2.wikiart.org/00132/images/henri-matisse/henri-matisse-une-rue-arcueil-1903-4.jpg",
    artist: "Henri Matisse",
    movement: "Fauvism",
    title: "Une Rue À Arcueil"
  },
  {
    image: "https://uploads3.wikiart.org/images/andre-derain/landscape-near-chatou-1904-1.jpg",
    artist: "André Derain",
    movement: "Fauvism",
    title: "Landscape near Chatou"
  },
  {
    image: "https://uploads3.wikiart.org/images/andre-derain/music-1904.jpg",
    artist: "André Derain",
    movement: "Fauvism",
    title: "Music"
  },
  {
    image: "https://uploads3.wikiart.org/images/maurice-de-vlaminck/the-gardener.jpg",
    artist: "Maurice de Vlaminck",
    movement: "Fauvism",
    title: "The Gardener"
  },
  {
    image: "https://uploads3.wikiart.org/images/andre-derain/landscape-near-chatou-1904-1.jpg",
    artist: "André Derain",
    movement: "Fauvism",
    title: "Landscape near Chatou"
  },
  {
    image: "https://uploads8.wikiart.org/images/henri-matisse/the-clown-1943.jpg",
    artist: "Henri Matisse",
    movement: "Abstract Expressionism",
    title: "The Clown"
  },
  {
    image: "https://uploads2.wikiart.org/stenographic-figure(1).jpg",
    artist: "Jackson Pollock",
    movement: "Abstract Expressionism",
    title: "Stenographic Figure"
  },
  {
    image: "https://uploads1.wikiart.org/images/arshile-gorky/the-betrothal-ii.jpg",
    artist: "Arshile Gorky",
    movement: "Surrealism",
    title: "The Betrothal II"
  },
  {
    image: "https://uploads6.wikiart.org/images/giorgio-cavallon/country-scene-1938.jpg",
    artist: "Giorgio Cavallon",
    movement: "Abstract Expressionism",
    title: "Country Scene"
  },
  {
    image: "https://uploads5.wikiart.org/images/mark-lancaster/untitled-red-brown-and-yellow.jpg",
    artist: "Mark Lancaster",
    movement: "Abstract Expressionism",
    title: "Untitled (Red, Brown and Yellow)"
  },
  {
    image: "https://uploads2.wikiart.org/images/joan-miro/the-air-1937.jpg",
    artist: "Joan Miró",
    movement: "Abstract Expressionism",
    title: "The Air"
  },
  {
    image: "https://uploads7.wikiart.org/00403/images/lyubov-popova/female-model-1913.jpg",
    artist: "Liubov Popova",
    movement: "Cubism",
    title: "Female Model"
  },
  {
    image: "https://uploads6.wikiart.org/images/jean-metzinger/woman-with-a-fan-1913.jpg",
    artist: "Jean Metzinger",
    movement: "Cubo-Futurism",
    title: "Woman with a Fan"
  },
  {
    image: "https://uploads6.wikiart.org/images/natalia-goncharova/cyclist.jpg",
    artist: "Natalia Goncharova",
    movement: "Cubo-Futurism",
    title: "Cyclist"
  },
  {
    image: "https://uploads0.wikiart.org/images/natalia-goncharova/airplane-over-train.jpg",
    artist: "Natalia Goncharova",
    movement: "Cubo-Futurism",
    title: "Airplane over train"
  },
  {
    image: "https://uploads5.wikiart.org/images/kazimir-malevich/living-in-a-big-hotel-1914.jpg",
    artist: "Kazimir Malevich",
    movement: "Cubo-Futurism",
    title: "Living in a big hotel"
  },
  {
    image: "https://uploads1.wikiart.org/images/kazimir-malevich/landscape-with-yellow-house-1907.jpg",
    artist: "Kazimir Malevich",
    movement: "Cubo-Futurism",
    title: "Landscape with Yellow House"
  },
  {
    image: "https://uploads6.wikiart.org/images/kazimir-malevich/lady-on-a-tram-station-1913.jpg",
    artist: "Kazimir Malevich",
    movement: "Cubo-Futurism",
    title: "Lady on a Tram Station"
  },
  {
    image: "https://uploads6.wikiart.org/00132/images/kazimir-malevich/white-on-white-malevich-1918.png",
    artist: "Kazimir Malevich",
    movement: "Suprematism",
    title: "Suprematist Composition: White on White"
  },
  {
    image: "https://uploads2.wikiart.org/images/kazimir-malevich/landscape-1908.jpg",
    artist: "Kazimir Malevich",
    movement: "Pointillism",
    title: "Landscape"
  },
  {
    image: "https://uploads4.wikiart.org/images/camille-pissarro/peasant-woman-warming-herself-1883.jpg",
    artist: "Camille Pissarro",
    movement: "Pointillism",
    title: "Peasant Woman Warming Herself"
  },
  {
    image: "https://uploads5.wikiart.org/images/camille-pissarro/women-gathering-grass-1883.jpg",
    artist: "Camille Pissarro",
    movement: "Pointillism",
    title: "Women Gathering Grass"
  },
  {
    image: "https://uploads5.wikiart.org/images/georges-seurat/courbevoie-landscape-with-turret-1884.jpg",
    artist: "Georges Seurat",
    movement: "Pointillism",
    title: "Courbevoie, Landscape With Turret"
  },
  {
    image: "https://uploads7.wikiart.org/images/albert-dubois-pillet/ankerplaats-1885.jpg",
    artist: "Albert Dubois-Pillet",
    movement: "Pointillism",
    title: "Anchorage"
  },
  {
    image: "https://uploads7.wikiart.org/images/georges-seurat/model-in-profile-1886.jpg",
    artist: "Georges Seurat",
    movement: "Pointillism",
    title: "Model in Profile"
  },
  {
    image: "https://uploads0.wikiart.org/images/albert-dubois-pillet/vue-de-paris-1885.jpg",
    artist: "Albert Dubois-Pillet",
    movement: "Pointillism",
    title: "View of Paris"
  },
  {
    image: "https://uploads8.wikiart.org/images/georges-seurat/sailboat-1884.jpg",
    artist: "Georges Seurat",
    movement: "Pointillism",
    title: "Sailboat"
  },
  {
    image: "https://uploads6.wikiart.org/images/carlo-carra/il-fiasco-1915.jpg",
    artist: "Carlo Carrà",
    movement: "Dada",
    title: "Il fiasco"
  },
  {
    image: "https://uploads0.wikiart.org/images/man-ray/larmes-tears.jpg",
    artist: "Man Ray",
    movement: "Dada",
    title: "Glass tears"
  },
  {
    image: "https://uploads1.wikiart.org/images/man-ray/the-gift-1921.jpg",
    artist: "Man Ray",
    movement: "Dada",
    title: "The Gift"
  },
  {
    image: "https://uploads2.wikiart.org/images/man-ray/rayograph-the-kiss-1922.jpg",
    artist: "Man Ray",
    movement: "Dada",
    title: "Rayograph (The Kiss)"
  },
  {
    image: "https://uploads7.wikiart.org/images/man-ray/ingre-s-violin-1924.jpg",
    artist: "Man Ray",
    movement: "Dada",
    title: "Ingres' Violin"
  },
  {
    image: "https://uploads1.wikiart.org/images/marcel-duchamp/in-advance-of-the-broken-arm-1915.jpg",
    artist: "Marcel Duchamp",
    movement: "Dada",
    title: "In Advance of the Broken Arm"
  },
  {
    image: "https://uploads4.wikiart.org/images/marcel-duchamp/bicycle-wheel-1913.jpg",
    artist: "Marcel Duchamp",
    movement: "Dada",
    title: "Bicycle Wheel"
  },
  {
    image: "https://uploads7.wikiart.org/images/marcel-duchamp/l-h-o-o-q-mona-lisa-with-moustache-1919.jpg",
    artist: "Marcel Duchamp",
    movement: "Dada",
    title: "L.H.O.O.Q, Mona Lisa with moustache"
  },
  {
    image: "https://uploads4.wikiart.org/images/marcel-duchamp/the-bride-stripped-bare-by-her-bachelors-1923.jpg",
    artist: "Marcel Duchamp",
    movement: "Dada",
    title: "The Bride Stripped Bare by her Bachelors"
  },
  {
    image: "https://uploads8.wikiart.org/images/marcel-duchamp/given-1-the-waterfall-2-the-illuminating-gas-1966.jpg",
    artist: "Marcel Duchamp",
    movement: "Conceptual Art",
    title: "Given: 1. The Waterfall, 2. The Illuminating Gas"
  },
  {
    image: "https://uploads2.wikiart.org/00444/images/andy-warhol/large-superman-small-1-jpg-1.png",
    artist: "Andy Warhol",
    movement: "Pop Art",
    title: "Superman"
  },
  {
    image: "https://uploads8.wikiart.org/00423/images/andy-warhol/screen-shot-2022-12-10-at-5-03-05-pm.png",
    artist: "Andy Warhol",
    movement: "Pop Art",
    title: "Campbell's Soup Can (Tomato Rice)"
  },
  {
    image: "https://uploads4.wikiart.org/images/roy-lichtenstein/bread-in-bag-1961.jpg",
    artist: "Roy Lichtenstein",
    movement: "Pop Art",
    title: "Bread in bag"
  },
  {
    image: "https://uploads7.wikiart.org/images/roy-lichtenstein/washing-machine-1961.jpg",
    artist: "Roy Lichtenstein",
    movement: "Pop Art",
    title: "Washing machine"
  },
  {
    image: "https://uploads6.wikiart.org/images/roy-lichtenstein/look-mickey-1961(1).jpg",
    artist: "Roy Lichtenstein",
    movement: "Pop Art",
    title: "Look Mickey"
  },
  {
    image: "https://uploads7.wikiart.org/images/roy-lichtenstein/washing-machine-1961.jpg",
    artist: "Roy Lichtenstein",
    movement: "Pop Art",
    title: "Washing machine"
  },
  {
    image: "https://uploads6.wikiart.org/images/andy-warhol/skull.jpg",
    artist: "Andy Warhol",
    movement: "Pop Art",
    title: "Skull"
  },
  {
    image: "https://uploads7.wikiart.org/images/andy-warhol/mickey.jpg",
    artist: "Andy Warhol",
    movement: "Pop Art",
    title: "Mickey"
  },
  {
    image: "https://uploads1.wikiart.org/images/andy-warhol/beethoven.jpg",
    artist: "Andy Warhol",
    movement: "Pop Art",
    title: "Beethoven"
  },
  {
    image: "https://uploads1.wikiart.org/images/andy-warhol/red-lenin.jpg",
    artist: "Andy Warhol",
    movement: "Pop Art",
    title: "Red Lenin"
  },
  {
    image: "https://uploads7.wikiart.org/00272/images/deborah-azzopardi/save-the-date-1.png",
    artist: "Deborah Azzopardi",
    movement: "Pop Art",
    title: "Save The Date"
  },
  {
    image: "https://uploads0.wikiart.org/images/jasper-johns/three-flags-1958.jpg",
    artist: "Jasper Johns",
    movement: "Pop Art",
    title: "Three Flags"
  },
  {
    image: "https://uploads1.wikiart.org/images/hiro-yamagata/cycling.jpg",
    artist: "Hiro Yamagata",
    movement: "Pop Art",
    title: "Cycling"
  },
  {
    image: "https://uploads2.wikiart.org/images/hiro-yamagata/96-atlanta-olympics-fencing.jpg",
    artist: "Hiro Yamagata",
    movement: "Pop Art",
    title: "’96 Atlanta Olympics – Fencing"
  },
  {
    image: "https://uploads4.wikiart.org/images/hiro-yamagata/not-detected-272417.jpg",
    artist: "Hiro Yamagata",
    movement: "Pop Art",
    title: "Air Show"
  },
  {
    image: "https://uploads1.wikiart.org/images/jose-de-guimaraes/unknown-title.jpg",
    artist: "José de Guimarães",
    movement: "Pop Art",
    title: "Untitled"
  },
  {
    image: "https://uploads0.wikiart.org/images/ralph-goings/untitled.jpg",
    artist: "Ralph Goings",
    movement: "Pop Art",
    title: "Untitled"
  },
  {
    image: "https://uploads0.wikiart.org/images/alex-katz/round-hill.jpg",
    artist: "Alex Katz",
    movement: "Pop Art",
    title: "Round Hill"
  },
  {
    image: "https://uploads5.wikiart.org/00167/images/franz-sedlacek/flower-piece-1922.jpg",
    artist: "Franz Sedlacek",
    movement: "Surrealism",
    title: "Flower Piece"
  },
  {
    image: "https://uploads6.wikiart.org/images/max-ernst/oedipus-rex-1922.jpg",
    artist: "Max Ernst",
    movement: "Surrealism",
    title: "Oedipus Rex"
  },
  {
    image: "https://uploads6.wikiart.org/images/max-ernst/the-beautiful-season-1925.jpg",
    artist: "Max Ernst",
    movement: "Surrealism",
    title: "The Beautiful Season"
  },
  {
    image: "https://uploads6.wikiart.org/images/paul-klee/women-in-their-sunday-best-1928(1).jpg",
    artist: "Paul Klee",
    movement: "Expressionism",
    title: "Women in their Sunday best"
  },
  {
    image: "https://uploads8.wikiart.org/images/paul-klee/aroundfish-1926(1).jpg",
    artist: "Paul Klee",
    movement: "Surrealism",
    title: "Aroundfish"
  },
  {
    image: "https://uploads4.wikiart.org/images/rene-magritte/untitled-collage(1).jpg",
    artist: "René Magritte",
    movement: "Surrealism",
    title: "Untitled collage"
  },
  {
    image: "https://uploads1.wikiart.org/images/rene-magritte/faraway-looks(1).jpg",
    artist: "René Magritte",
    movement: "Surrealism",
    title: "Faraway looks"
  },
  {
    image: "https://uploads3.wikiart.org/images/rene-magritte/young-girl-eating-a-bird-the-pleasure-1927(1).jpg",
    artist: "René Magritte",
    movement: "Surrealism",
    title: "Young girl eating a bird (The pleasure)"
  },
  {
    image: "https://uploads3.wikiart.org/00183/images/salvador-dali/624-1.jpg",
    artist: "Salvador Dalí",
    movement: "Surrealism",
    title: "Dream Caused by the Flight of a Bee around a Pomegranate a Second before Awakening"
  },
  {
    image: "https://uploads0.wikiart.org/images/salvador-dali/young-virgin-auto-sodomized-by-the-horns-of-her-own-chastity.jpg",
    artist: "Salvador Dalí",
    movement: "Surrealism",
    title: "Young Virgin Auto-Sodomized by the Horns of Her Own Chastity"
  },
  {
    image: "https://uploads2.wikiart.org/images/salvador-dali/the-discovery-of-america-by-christopher-columbus-1959.jpg",
    artist: "Salvador Dalí",
    movement: "Surrealism",
    title: "The Discovery of America by Christopher Columbus"
  },
  {
    image: "https://uploads8.wikiart.org/images/salvador-dali/apparatus-and-hand-1927.jpg",
    artist: "Salvador Dalí",
    movement: "Surrealism",
    title: "Apparatus and Hand"
  },
  {
    image: "https://uploads8.wikiart.org/images/salvador-dali/harlequin-1927.jpg",
    artist: "Salvador Dalí",
    movement: "Surrealism",
    title: "Harlequin"
  },
  {
    image: "https://uploads7.wikiart.org/images/mary-cassatt/woman-with-a-pearl-necklace-1879.jpg",
    artist: "Mary Cassatt",
    movement: "Impressionism",
    title: "Woman with a Pearl Necklace"
  },
  {
    image: "https://uploads8.wikiart.org/images/henri-de-toulouse-lautrec/nice-on-the-promenade-des-anglais-1880.jpg",
    artist: "Toulouse-Lautrec",
    movement: "Impressionism",
    title: "Nice, on the Promenade des Anglais"
  },
  {
    image: "https://uploads7.wikiart.org/images/henri-de-toulouse-lautrec/ballet-dancers-1885.jpg",
    artist: "Toulouse-Lautrec",
    movement: "Post-Impressionism",
    title: "Ballet Dancers"
  },
  {
    image: "https://uploads1.wikiart.org/images/henri-de-toulouse-lautrec/woman-at-her-toil-1896.jpg",
    artist: "Toulouse-Lautrec",
    movement: "Post-Impressionism",
    title: "Rousse also called Toilet"
  },
  {
    image: "https://uploads8.wikiart.org/images/henri-de-toulouse-lautrec/in-bed-the-kiss-1892.jpg",
    artist: "Toulouse-Lautrec",
    movement: "Post-Impressionism",
    title: "In Bed, The Kiss"
  },
  {
    image: "https://uploads3.wikiart.org/images/vincent-van-gogh/dog(1).jpg",
    artist: "Vincent van Gogh",
    movement: "Post-Impressionism",
    title: "Dog"
  },
  {
    image: "https://uploads3.wikiart.org/images/vincent-van-gogh/the-potato-eaters-1885-1.jpg",
    artist: "Vincent van Gogh",
    movement: "Realism",
    title: "The Potato Eaters"
  },
  {
    image: "https://uploads2.wikiart.org/images/vincent-van-gogh/scheveningen-woman-knitting-1881.jpg",
    artist: "Vincent van Gogh",
    movement: "Realism",
    title: "Scheveningen Woman Knitting"
  },
  {
    image: "https://uploads0.wikiart.org/00213/images/vincent-van-gogh/antique-3840759.jpg",
    artist: "Vincent van Gogh",
    movement: "Post-Impressionism",
    title: "Irises"
  },
  {
    image: "https://uploads4.wikiart.org/images/paul-gauguin/are-you-jealous-1892.jpg",
    artist: "Paul Gauguin",
    movement: "Cloisonnism",
    title: "Are You Jealous?"
  },
  {
    image: "https://uploads8.wikiart.org/images/paul-gauguin/van-gogh-painting-sunflowers-1888.jpg",
    artist: "Paul Gauguin",
    movement: "Cloisonnism",
    title: "Van Gogh Painting Sunflowers"
  },
  {
    image: "https://uploads0.wikiart.org/00475/images/paul-gauguin/the-yellow-christ-1889.jpg",
    artist: "Paul Gauguin",
    movement: "Cloisonnism",
    title: "Yellow Christ"
  },
  {
    image: "https://uploads4.wikiart.org/images/claude-monet/road-to-the-saint-simeon-farm.jpg",
    artist: "Claude Monet",
    movement: "Impressionism",
    title: "Road to the Saint-Simeon Farm"
  },
  {
    image: "https://uploads1.wikiart.org/images/pierre-auguste-renoir/sleeping-cat-1862.jpg",
    artist: "Pierre-Auguste Renoir",
    movement: "Impressionism",
    title: "Sleeping Cat"
  },
  {
    image: "https://uploads3.wikiart.org/images/edgar-degas/promenade-by-the-sea.jpg",
    artist: "Edgar Degas",
    movement: "Impressionism",
    title: "Promenade by the Sea"
  },
  {
    image: "https://uploads3.wikiart.org/images/edgar-degas/landscape-at-valery-sur-somme.jpg",
    artist: "Edgar Degas",
    movement: "Impressionism",
    title: "Landscape at Valery-sur-Somme"
  },
  {
    image: "https://uploads4.wikiart.org/00168/images/edgar-degas/edgar-degas-the-ballet-class.jpg",
    artist: "Edgar Degas",
    movement: "Impressionism",
    title: "The Ballet Class"
  },
  {
    image: "https://uploads8.wikiart.org/images/edgar-degas/two-dancers-on-stage-1877.jpg",
    artist: "Edgar Degas",
    movement: "Impressionism",
    title: "Two Dancers on Stage"
  },
  {
    image: "https://uploads1.wikiart.org/images/amadeo-de-souza-cardoso/the-rise-of-green-square-and-the-woman-s-violin-1916.jpg",
    artist: "Amadeo de Souza-Cardoso",
    movement: "Cubism",
    title: "The Rise of Green Square and the Woman's Violin"
  },
  {
    image: "https://uploads0.wikiart.org/images/amadeo-de-souza-cardoso/os-galgos-1911.jpg",
    artist: "Amadeo de Souza-Cardoso",
    movement: "Expressionism",
    title: "The Greyhounds"
  },
  {
    image: "https://uploads3.wikiart.org/images/amadeo-de-souza-cardoso/house-manhufe-1910.jpg",
    artist: "Amadeo de Souza-Cardoso",
    movement: "Impressionism",
    title: "House Manhufe"
  },
  {
    image: "https://uploads6.wikiart.org/images/ant-nio-de-carvalho-da-silva-porto/guardando-o-rebanho.jpg",
    artist: "Silva Porto",
    movement: "Realism",
    title: "Guardando o Rebanho"
  },
  {
    image: "https://uploads4.wikiart.org/images/ant-nio-de-carvalho-da-silva-porto/recanto-de-praia.jpg",
    artist: "Silva Porto",
    movement: "Impressionism",
    title: "Recanto de praia"
  },
  {
    image: "https://uploads7.wikiart.org/images/columbano-bordalo-pinheiro/um-concerto-de-amadores-1882.jpg",
    artist: "Columbano Bordalo Pinheiro",
    movement: "Realism",
    title: "Um Concerto de Amadores"
  },
  {
    image: "https://uploads6.wikiart.org/images/columbano-bordalo-pinheiro/portrait-of-arthur-loureiro.jpg",
    artist: "Columbano Bordalo Pinheiro",
    movement: "Impressionism",
    title: "Portrait Of Arthur Loureiro"
  },
  {
    image: "https://uploads2.wikiart.org/images/jose-malhoa/o-fado-1910.jpg",
    artist: "José Malhoa",
    movement: "Realism",
    title: "O Fado"
  },
  {
    image: "https://uploads6.wikiart.org/images/jose-malhoa/the-atelier-of-the-sculptor-sim-es-de-almeida-1883.jpg",
    artist: "José Malhoa",
    movement: "Realism",
    title: "The Atelier of the Sculptor Simões de Almeida"
  },
  {
    image: "https://uploads1.wikiart.org/images/jose-malhoa/gozando-os-rendimentos-1893.jpg",
    artist: "José Malhoa",
    movement: "Realism",
    title: "Gozando os rendimentos"
  },
  {
    image: "https://uploads0.wikiart.org/images/eduardo-viana/nu-1925.jpg",
    artist: "Eduardo Afonso Viana",
    movement: "Post-Impressionism",
    title: "Nu"
  },
  {
    image: "https://uploads5.wikiart.org/images/eduardo-viana/k4-quadrado-azul-1916.jpg",
    artist: "Eduardo Afonso Viana",
    movement: "Cubism",
    title: "K4 Quadrado Azul"
  },
  {
    image: "https://uploads5.wikiart.org/images/eduardo-viana/rapaz-das-lou-as-1919.jpg",
    artist: "Eduardo Afonso Viana",
    movement: "Orphism",
    title: "Rapaz das louças"
  },
  {
    image: "https://uploads0.wikiart.org/images/josefa-de-obidos/st-francis-and-st-clare-of-assisi-in-adoration-of-the-infant-christ.jpg",
    artist: "Josefa de Óbidos",
    movement: "Baroque",
    title: "St. Francis and St. Clare of Assisi in adoration of the Infant Christ"
  },
  {
    image: "https://uploads7.wikiart.org/images/josefa-de-obidos/cordeiro-pascal-1670.jpg",
    artist: "Josefa de Óbidos",
    movement: "Baroque",
    title: "Cordeiro Pascal"
  },
  {
    image: "https://uploads3.wikiart.org/images/domingos-sequeira/retrato-de-conde-de-farrobo-1813.jpg",
    artist: "Domingos Sequeira",
    movement: "Neoclassicism",
    title: "Portrait of the Duke of Farrobo, Joãn Pedro Quintilla"
  },
  {
    image: "https://uploads4.wikiart.org/images/domingos-sequeira/o-milagre-de-ourique-1793.jpg",
    artist: "Domingos Sequeira",
    movement: "Neoclassicism",
    title: "O Milagre de Ourique"
  },
  {
    image: "https://uploads7.wikiart.org/images/domingos-sequeira/mulher-com-turbante.jpg",
    artist: "Domingos Sequeira",
    movement: "Neoclassicism",
    title: "Mulher com turbante"
  },
  {
    image: "https://uploads6.wikiart.org/images/jose-malhoa/corn-in-the-sun.jpg",
    artist: "José Malhoa",
    movement: "Realism",
    title: "Milho no sol"
  },
  {
    image: "https://uploads7.wikiart.org/images/paula-rego/snow-white-swallows-the-poisoned-apple-1995.jpg",
    artist: "Paula Rego",
    movement: "Expressionism",
    title: "Snow White Swallows the Poisoned Apple"
  },
  {
    image: "https://uploads6.wikiart.org/images/paula-rego/a-madrasta-1970.jpg",
    artist: "Paula Rego",
    movement: "Surrealism",
    title: "A Madrasta"
  },
  {
    image: "https://uploads8.wikiart.org/images/paula-rego/war-2003.jpg",
    artist: "Paula Rego",
    movement: "Surrealism",
    title: "War"
  },
  {
    image: "https://uploads4.wikiart.org/images/paula-rego/dog-woman-1994.jpg",
    artist: "Paula Rego",
    movement: "Expressionism",
    title: "Dog Woman"
  },
  {
    image: "https://uploads8.wikiart.org/images/helena-almeida/study-for-inner-improvement-1977.jpg",
    artist: "Helena Almeida",
    movement: "Conceptual Art",
    title: "Study for Inner Improvement"
  },
  {
    image: "https://uploads6.wikiart.org/images/helena-almeida/feel-me-1977.jpg",
    artist: "Helena Almeida",
    movement: "Conceptual Art",
    title: "Feel Me"
  },
  {
    image: "https://uploads6.wikiart.org/images/julio-pomar/o-almo-o-do-trolha-1950.jpg",
    artist: "Júlio Pomar",
    movement: "Expressionism",
    title: "O Almoço do Trolha"
  },
  {
    image: "https://uploads6.wikiart.org/images/julio-pomar/fernando-pessoa.jpg",
    artist: "Júlio Pomar",
    movement: "Neo-Expressionism",
    title: "Fernando Pessoa"
  },
  {
    image: "https://uploads8.wikiart.org/images/julio-pomar/chantilly-i-1965.jpg",
    artist: "Júlio Pomar",
    movement: "Abstract Expressionism",
    title: "Chantilly I"
  },
  {
    image: "https://uploads5.wikiart.org/images/julio-pomar/edgar-poe-fernando-pessoa-e-o-corvo-1985.jpg",
    artist: "Júlio Pomar",
    movement: "Neo-Expressionism",
    title: "Edgar Poe, Fernando Pessoa e o Corvo"
  },
  {
    image: "https://uploads4.wikiart.org/images/marcelino-vespeira/not-cia-violentada-1948.jpg",
    artist: "Marcelino Vespeira",
    movement: "Surrealism",
    title: "Notícia violentada"
  },
  {
    image: "https://uploads3.wikiart.org/images/marcelino-vespeira/apertado-pela-fome-1945.jpg",
    artist: "Marcelino Vespeira",
    movement: "Surrealism",
    title: "Apertado pela Fome"
  },
  {
    image: "https://uploads8.wikiart.org/images/mario-cesariny/maldoror-1947.jpg",
    artist: "Mário Cesariny",
    movement: "Automatic Painting",
    title: "Maldoror"
  },
  {
    image: "https://uploads4.wikiart.org/images/mario-cesariny/as-grandes-viagens.jpg",
    artist: "Mário Cesariny",
    movement: "Color Field Painting",
    title: "As grandes viagens"
  },
  {
    image: "https://uploads0.wikiart.org/images/mario-cesariny/sem-t-tulo-1996.jpg",
    artist: "Mário Cesariny",
    movement: "Color Field Painting",
    title: "Sem título"
  },
  {
    image: "https://uploads0.wikiart.org/images/antonio-dacosta/n-o-h-sim-sem-n-o-o-eremita-1985.jpg",
    artist: "António Dacosta",
    movement: "Surrealism",
    title: "Não há sim sem não - O Eremita"
  },
  {
    image: "https://uploads1.wikiart.org/images/antonio-dacosta/o-usur-rio-1940.jpg",
    artist: "António Dacosta",
    movement: "Surrealism",
    title: "O Usurário"
  },
  {
    image: "https://uploads8.wikiart.org/images/antonio-dacosta/serenata-a-oriana-1940.jpg",
    artist: "António Dacosta",
    movement: "Surrealism",
    title: "Serenata Açoriana"
  },
  {
    image: "https://uploads7.wikiart.org/images/maria-helena-vieira-da-silva/biblioth-que-1949.jpg",
    artist: "Maria Helena Vieira da Silva",
    movement: "Surrealism",
    title: "Bibliothèque"
  },
  {
    image: "https://uploads6.wikiart.org/images/maria-helena-vieira-da-silva/dislocation-du-labyrinthe.jpg",
    artist: "Maria Helena Vieira da Silva",
    movement: "Tachisme",
    title: "Dislocation du labyrinthe"
  },
  {
    image: "https://uploads7.wikiart.org/images/maria-helena-vieira-da-silva/composition-1955.jpg",
    artist: "Maria Helena Vieira da Silva",
    movement: "Tachisme",
    title: "Composition"
  },
  {
    image: "https://uploads7.wikiart.org/images/jos-sobral-de-almada-negreiros/maternity-1935.jpg",
    artist: "José de Almada Negreiros",
    movement: "Art Déco",
    title: "Maternity"
  },
  {
    image: "https://uploads5.wikiart.org/images/jos-sobral-de-almada-negreiros/acrobats-1947.jpg",
    artist: "José de Almada Negreiros",
    movement: "Cubism",
    title: "Acrobats"
  },
  {
    image: "https://uploads6.wikiart.org/images/jos-sobral-de-almada-negreiros/portrait-of-fernando-pessoa-1954.jpg",
    artist: "José de Almada Negreiros",
    movement: "Art Déco",
    title: "Portrait of Fernando Pessoa"
  },
  {
    image: "https://uploads0.wikiart.org/images/mario-eloy/from-my-window-1938.jpg",
    artist: "Mário Eloy",
    movement: "Expressionism",
    title: "From My Window"
  },
  {
    image: "https://uploads4.wikiart.org/images/mario-eloy/bailarico-1936.jpg",
    artist: "Mário Eloy",
    movement: "Expressionism",
    title: "Bailarico"
  },
  {
    image: "https://uploads8.wikiart.org/images/mario-eloy/self-portrait-1939.jpg",
    artist: "Mário Eloy",
    movement: "Expressionism",
    title: "Self-Portrait"
  },
  {
    image: "https://uploads7.wikiart.org/images/jos-sobral-de-almada-negreiros/maternity-1935.jpg",
    artist: "José de Almada Negreiros",
    movement: "Art Déco",
    title: "Maternity"
  },
];

export default data;

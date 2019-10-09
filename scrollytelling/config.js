var config = {
    style: 'mapbox://styles/lauragift21/ck1j5amev01341cp4xjnj2p5u',
    accessToken: 'pk.eyJ1IjoibGF1cmFnaWZ0MjEiLCJhIjoiY2sxajB2dzNvMDZnajNkcDc5dGhkMTYyYiJ9.GQrnUvIWEjN0Mm5w4eAy0Q',
    title: 'My Travel Journal',
    subtitle: 'I attended Anjana\'s workshop on building custom interactive map and here\'s what I came up with',
    byline: 'Gift Egwuenu',
    footer: 'Created at Concatenate Lagos 2019',
    showMarkers: false,
    theme: 'light',
    alignment: 'left',
    chapters: [
        //TODO replace this data with data from the first point in your dataset
        {
            id: 'concatenate-lagos',
            title: 'Concatenate Lagos',
            description: 'A free conference for African developers with speakers from around the world.',
            location: {
              "center": [
                3.366639462826271,
                6.51635441424402
              ],
              "zoom": 11.805394255186213,
              "pitch": 33.499999999999986,
              "bearing": 136.79999999999995
            }
        },
         {
          id: 'Concatenate-Kenya',
          location: {
            "center": [
              38.65729400711922,
              -4.261468468040192
            ],
            "zoom": 6.3060616689703503,
            "pitch": 0,
            "bearing": 0
          },
          title: "Concatenate Kenya Trip",
          description: "I'll be in Nairobi Kenya for Concatanate Conference from Oct 15th"
        },
        {
          id: 'microsoft-ignite',
          location: {
            "center": [
              -79.06782614568283,
              29.089693898945995
            ],
            "zoom": 6.3060616689703503,
            "pitch": 0,
            "bearing": 0
          },
          title: "Microsoft Ignite 2019",
          description: "Super excited to visit Orlando Florida for Microsoft Ignite as a commmunity member."
        },
        {
          id: 'aws-reinvent',
          location: {
          "center": [
            -95.56071737481858,
            30.56973346889653
          ],
          "zoom": 6.3060616689703503,
          "pitch": 0,
          "bearing": 0
        },
        title: "AWS Re:invent 2019",
        description: "I'll be attending the annual AWS Re:invent event in the US. "
        },
        {
          id: 'vacation-bali',
          location: {
            "center": [
              117.10834586290457,
              -7.539779710681543
            ],
            "zoom": 6.6706852767638418,
            "pitch": 0,
            "bearing": 0
          },
          title: "Vacation 2021",
          description: "Next year, One place I'll love to visit is definetly Bali so this will be my vacation goal!"
        }
        //TODO Copy-paste more chapters here - one for each point in your dataset!
    ]
};

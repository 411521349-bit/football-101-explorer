# Football 101: Read the Game

An interactive, single-page guide to football for complete beginners and for fans who want to know more about teams and history.

**Live site:** https://411521349-bit.github.io/football-101-explorer/

## Who it is for
- International students and anyone who wants to watch football with friends but does not know the rules or positions yet.
- Fans who want a quick reference for famous teams, World Cup history and the big competitions.

## What it does
The site is split into pages; the home page only shows the overview, and the menu opens each page.
- **Your first match:** an interactive match timeline and five things to watch for.
- **Formations:** 17 formations in four groups (four at the back, three, five, historic), each with strengths, weaknesses and a famous example. Select any player to see the role.
- **Rules:** a yellow/red card simulator (11 situations, including the second-yellow animation), the offside lab, illustrated referee signals (8, including how cards are shown) and 15 rules in plain words.
- **Clubs:** 67 featured clubs filtered by continent (with map), league and search, plus every club in the Premier League, La Liga, Serie A, Bundesliga, Ligue 1, Primeira Liga and Eredivisie for 2026-27 (132 clubs, promoted clubs marked). Each club has a shirt in its home colours and pattern (stripes, hoops, halves, sash and more).
- **National teams:** 39 teams by confederation with flags, World Cup and continental titles, search and sorting.
- **League tables:** current 2026-27 standings for the seven big European leagues plus Brazil's Série A, MLS (Eastern and Western Conference), the Saudi Pro League and Japan's J1 League; K League 1 and Argentina's Primera are added by the weekly update. Qualification places and relegation zone are highlighted. The data lives in `standings.js` and is refreshed weekly by a scheduled update.
- **Squads:** 2026-27 squads for 11 big clubs (Real Madrid, Barcelona, Liverpool, Arsenal, Manchester City, Chelsea, Inter, AC Milan, Benfica, Porto, Sporting) with shirt number, position, nationality, coach, captain, last season's trophies, goals and assists where the source gives them, and a ★ for the player with the most goals plus assists.
- **Competitions:** 15 competitions. Each opens a panel with the champion's road to the title, with a year picker (68 editions; each cup year shows its full knockout bracket from the first knockout round to the final (all 40 cup editions); leagues show the top-4 table, and its own groups or team list where available) (winner in green, loser in red; final top-4 table for leagues), the most-titles ranking and every team in that edition. Every edition shows the top 10 scorers and, where a reliable list exists, the top 10 assists, goals + assists (G/A), clean sheets and the official player of the season, plus a table of the leaders in every season. League and Champions League figures come from topscorersfootball.com. The World Cup also lists every final since 1930.
- **Player awards:** Ballon d'Or, Ballon d'Or Féminin, European Golden Shoe, The Best FIFA Men's Player, Kopa Trophy and Yashin Trophy, with record holders (position and years won), most-wins ranking, winners by position and every winner since 2007 (or since the award began) with position and club.
- **Transfer market:** how the world record fee grew from Maradona (£3m, 1982) to Neymar (€222m, 2017), the biggest deal of every year since 2000 (chart and table), the 30 biggest fees ever with filters by player, year, club and position, the summer 2026 window, the most valuable players today, and transfer words explained.
- **Fan glossary:** 32 terms with live search.
- **Quiz:** 12 questions with instant feedback and a score.

Club shirts, trophy icons and player cards are original illustrations, not official logos or photos.

## How to run
Open `index.html` in any modern browser. No install or build step. Files: `index.html`, `style.css`, `data.js` (all facts), `standings.js` (live league tables: played, won, drawn, lost, goals for, goals against, points), `extra.js` (player stats, transfers and squads), `app.js` (interactions). Continent maps and flags load from free CDNs (world-atlas, flagcdn.com) when online.

## How it was made
Built with AI assistance (Claude) using plain HTML, CSS, JavaScript and SVG. Rules were checked against the IFAB Laws of the Game; recent results and award winners (2025-26 league champions, 2026 Champions League final, 2026 World Cup, 2026 Ballon d'Or, 2025-26 Golden Shoe, The Best 2025) were checked against news reports in November 2026. The page was tested at desktop and phone widths.

## Limits
There is no single official player rating, so the site shows the official player of the season instead. Squads change in every transfer window; check the date shown above each squad. Some tables outside Europe were last confirmed earlier in the season and are refreshed by the weekly update.
Simplified for beginners. It does not cover every detail of the Laws or every competition. Team facts and trophy counts are correct as of November 2026 and will need updating after future seasons.

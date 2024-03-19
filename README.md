# README - RESTful API for the Spanish Backgammon Association

Welcome to the RESTful API for the Spanish Backgammon Association (AEB)!

## TABLE OF CONTENTS
1. [Project Description](#project-Description)
2. [Key Features](#key-features)
3. [Routes Info](#routes-info)

***

## Project Description

This project aims to promote and unite the backgammon community in Spain. The Spanish Backgammon Association seeks to encourage the practice of this exciting board game, as well as create a space where players can compete, collaborate, and represent Spain in international tournaments.

## Key Features

- **Player Registration: Users can register as backgammon players and create individual profiles.

- **Learning Section:  Users can share interesting positions where they struggled to make the right move, allowing for learning and discussion.

- **Discord Platform: in the details page of the post users can chat about the pros and cons of the movement they are defending.

- **Favorite Feature: users can click on the heart icon of the postCards and automatically add them into their profile page, so they can review it later,  have a position fav list or a blunder database.

***

## Projected Features

- **News Section:  A dedicated space where everyone can stay updated with the latest backgammon news and keep abreast of day-to-day challenges and developments within the community. So there will be a dedicsated space where admin could create news.

- **League: One of the primary objectives of the website is to establish a competitive league for Spanish players. Utilizing platforms such as Backgammon Heroes or Backgammon Galaxy for tournaments, this league will allow players to acquire points throughout the year. The top 7 players in the league standings will earn the opportunity to represent Spain in the World Team Championship.

- **Tournaments:Throughout the year, we will host a variety of tournaments, including monthly events and special tournaments with entry fees ranging from 10€ to 20€. A portion of the entry fees will be allocated to cover website maintenance costs, ensuring the continued operation and improvement of our platform. So there will a be a section only for admins where you could create new tournaments.

- **Spanish Ranking: Upon successful implementation, we aim to establish a Spanish ranking system. This ranking will be determined by points accumulated through participation in association events. Additionally, a unique component will consider players' PR (Performance Rating) and error rate data from WBIF (World Backgammon Internet Federation), focusing on the most recent 20 matches. This comprehensive approach ensures a holistic assessment of players' performance within the backgammon community.

- **Members Section: A dedicated space where all members are listed, fostering transparency and community engagement by providing visibility to all participants within the association.

- **Contacts Us: Get in touch with us!

- **About Us: Explore a brief description of the association's founders.


### Routes Info

| URL  |  DESCRIPTION |  PROTECTED|
| ---------- | ---------- | ---------- |
| /| HomePage/landing page | x |
| /signup | Signup Page  | x |
| /login| Login Page | X |
| /profile| Profile Page | yes |
| /discord/post| all post page | x |
| /discord/post/:postId| Post Details | x |
| /*| 404 page | x |

### CLIENT PROJECTED ROUTES


| URL  |  DESCRIPTION |  PROTECTED|
| ---------- | ---------- | ---------- |
| /tournaments| all tournaments | x |
| /tournaments/:tournamentId| tournament details| x |
| /worldRanking| world wide ranks | x |
| /spanishRankin| spanish ranks | x |
| /members| all members | x |
| /member/:memberId| member details| x |
| /news| all backgammon announcements| x |
| /news/create| new announcement| yes |
| /news/:newsId| news details| x |
| /contactUs| contact page/contact form | x|
| /aboutUs| Founders Page | x |

## Blog app

- Technologies used: >Nextjs
  > Postgres database(from supabase)
  > Prisma ORM
  > KindeAuth (Upcoming Next-Auth)
  -> Will add more features as it get pushed to repo.. have a nice day
       ##  To run this project locally:
      ```bash
        clone the repo
        npm install
        Then add env. variables
  KINDE_CLIENT_SECRET=
  KINDE_CLIENT_ID=""
  KINDE_ISSUER_URL="kinde auth url"
  KINDE_SITE_URL="http://localhost:3000"
  KINDE_POST_LOGOUT_REDIRECT_URL="http://localhost:3000"
  KINDE_POST_LOGIN_REDIRECT_URL="http://localhost:3000/api/auth/creation"
  DATABASE_URL = "supabase url (transaction)"
  DIRECT_URL ="supabase url (session)"
  ```bash
  npm run dev
  ```

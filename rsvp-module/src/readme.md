# 📬 RSVP Management Module

Welcome! This is a lightweight RSVP management module built with TypeScript and Node.js. I created it to help simplify how we collect and track guest responses for events — whether it's a small meetup, a house party, or part of a larger app.

---

💡 Why I Built This

RSVPs often get messy. People respond on different platforms, forget to reply, or change their minds at the last minute. I wanted a simple, structured way to manage all of that — something you can run as a script or plug into a bigger system.

This module:
- Lets you add or update RSVP responses (Yes / No / Maybe)
- Logs every action so you can track changes
- Gives you a summary of who's confirmed or declined
- Keeps things clean and type-safe using TypeScript

---

🧠 What’s Inside

Here’s what the module does behind the scenes:
- `RsvpService.ts`: Core logic — adds, updates, and tracks RSVP data
- `Logger.ts`: Simple console-based logger to see what’s happening
- `types.ts`: Type definitions for players and RSVP entries
- `index.ts`: A quick demo script showing how everything fits together

---

📁 Project Structure

rsvp-module/  
├── src/  
│   ├── RsvpService.ts        → The heart of the module — handles all logic  
│   ├── Logger.ts             → Logs RSVP changes with clean formatting  
│   ├── types.ts              → Player and RSVP entry interfaces  
│   └── index.ts              → Sample usage to test out the service  
├── dist/                     → Compiled JavaScript after build  
├── package.json              → Project config and dependencies  
├── tsconfig.json             → TypeScript settings  
├── node_modules/             → Auto-generated dependencies after install  

---

🛠 Tech Stack

- TypeScript for clean, strongly typed logic
- Node.js as the runtime
- Modular design (SRP, dependency injection)
- No database — everything is stored in memory for now

---

🚀 Getting Started

Want to try it out?

1. Clone the repo:
   git clone https://github.com/your-username/rsvp-module.git

2. Move into the project folder:
   cd rsvp-module

3. Install the dependencies:
   npm install

4. Compile the code:
   npx tsc

5. Run the script:
   node dist/index.js

That’s it — you’ll see RSVP logs and summaries right in your terminal.

---

✅ Sample Output

[LOG]: RSVP for Aarav set to Yes  
[LOG]: RSVP for Isha set to No  
[LOG]: RSVP for Rohan set to Maybe  
...  
✅ Confirmed Attendees:  
[ { id: '1', name: 'Aarav' }, { id: '4', name: 'Divya' }, { id: '6', name: 'Meera' } ]  
📊 RSVP Summary:  
{ total: 6, confirmed: 3, declined: 2 }

---

🔮 What's Next

This started as a side project, but here’s what I’d love to add next:
- Connect it to a real database like MongoDB or PostgreSQL
- Add a REST API so it can be used remotely
- Build a simple web UI in React to view responses
- Write tests using Jest

---

👋 About Me

I’m Karthik Kashyap R P — a software engineer with a love for building systems that just work. Whether it's backend APIs, dev tools, or utilities like this one, I enjoy solving problems that make things smoother for others.

Currently pursuing my Master’s in Computer Software Engineering at Northeastern University, Boston (Class of 2026).

This module reflects my focus on simplicity, reusability, and writing code that’s easy to maintain and extend.



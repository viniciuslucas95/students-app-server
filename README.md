<h1 align="center">Students App Server</h1>
<p align="center">REST API for <a href="https://github.com/viniciuslucas95/students-app-client-web">Students App Client Web</a> project.</p>
<h2>How to setup localhost for testing</h2>
<p>1. Install all the packages with "npm install".</p>
<p>2. Start the docker containers with "docker-compose up -d".</p>
<p>3. Start the server on dev mode with "npm run dev".</p>
<p>4. It's done. Now you can make HTTP requests to http://localhost:3001/.</p>
<h3>Routes</h3>
<p><i>{} = body, -> = returning values</i></p>
<h4>Students</h4>
<p>GET ALL /students -> [{id: string, name: string}, ...]</p>
<p>GET ONE /students/:id -> {id: string, name: string}</p>
<p>CREATE /students {name: string, age: number} -> {id: string}</p>
<p>UPDATE /students/:id {name?: string, age?: number} <i>* At least one value must be sent</i></p>
<p>DELETE /students/:id</p>
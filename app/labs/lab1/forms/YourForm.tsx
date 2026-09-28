export default function YourForm() {
    return (
        <form
            id="wd-your-form"
            onSubmit={(event) => {
                event.preventDefault();
            }}
        >
            <h3>Student Profile</h3>
            <label htmlFor="wd-your-first-name">First Name: </label>
            <input type="text"
                   placeholder="Jane"
                   id="wd-your-first-name"
                   defaultValue="Jane"
                   title="first name"
            />
            <br />
            <label htmlFor="wd-your-last-name">Last Name: </label>
            <input type="text"
                   placeholder="Doe"
                   id="wd-your-last-name"
                   defaultValue="Doe"
                   title="last name"
            />
            <br />
            <label htmlFor="wd-your-password">Password: </label>
            <input type="password"
                   placeholder="Enter a password"
                   id="wd-your-password"
                   defaultValue=""
                   title="password"
            />
            <br />
            <label htmlFor="wd-your-bio">Why I am taking this course:</label>
            <br />
            <textarea
                id="wd-your-bio"
                cols={30}
                rows={5}
                placeholder="Write a short bio here"
                defaultValue="SAMPLE BIO: Jane Doe is a student at Sample University taking this course to learn full-stack web development."
            />
            <br />
            <label>Class Standing:</label>
            <br />
            <input type="radio" name="wd-standing" id="wd-your-radio-freshman" />
            <label htmlFor="wd-your-radio-freshman">Freshman</label>
            <br />
            <input type="radio" name="wd-standing" id="wd-your-radio-sophomore" />
            <label htmlFor="wd-your-radio-sophomore">Sophomore</label>
            <br />
            <input type="radio" name="wd-standing" id="wd-your-radio-junior" defaultChecked />
            <label htmlFor="wd-your-radio-junior">Junior</label>
            <br />
            <input type="radio" name="wd-standing" id="wd-your-radio-senior" />
            <label htmlFor="wd-your-radio-senior">Senior</label>
            <br />
            <input type="radio" name="wd-standing" id="wd-your-radio-graduate" />
            <label htmlFor="wd-your-radio-graduate">Graduate</label>
            <br />
            <label>Enrollment status:</label>
            <br />
            <input type="radio" name="wd-enrollment" id="wd-your-radio-full-time" defaultChecked />
            <label htmlFor="wd-your-radio-full-time">Full-time</label>
            <br />
            <input type="radio" name="wd-enrollment" id="wd-your-radio-part-time" />
            <label htmlFor="wd-your-radio-part-time">Part-time</label>
            <br />
            <label>Interests:</label>
            <br />
            <input type="checkbox" name="wd-interests" id="wd-your-checkbox-javascript" defaultChecked />
            <label htmlFor="wd-your-checkbox-javascript">JavaScript</label>
            <br />
            <input type="checkbox" name="wd-interests" id="wd-your-checkbox-react" defaultChecked />
            <label htmlFor="wd-your-checkbox-react">React</label>
            <br />
            <input type="checkbox" name="wd-interests" id="wd-your-checkbox-databases" />
            <label htmlFor="wd-your-checkbox-databases">Databases</label>
            <br />
            <input type="checkbox" name="wd-interests" id="wd-your-checkbox-full-stack" />
            <label htmlFor="wd-your-checkbox-full-stack">Full-stack developer career</label>
            <br />
            <label htmlFor="wd-your-major">Major:</label>
            <br />
            <select id="wd-your-major" defaultValue="Computer Science">
                <option value="Computer Science">Computer Science</option>
                <option value="Information Systems">Information Systems</option>
                <option value="Data Science">Data Science</option>
                <option value="Mathematics">Mathematics</option>
            </select>
            <br />
            <label htmlFor="wd-your-topics">Topics to deepen this term:</label>
            <br />
            <select id="wd-your-topics" multiple defaultValue={["HTML", "React"]}>
                <option value="HTML">HTML</option>
                <option value="CSS">CSS</option>
                <option value="React">React</option>
                <option value="Node.js">Node.js</option>
                <option value="MongoDB">MongoDB</option>
            </select>
            <br />
            <label htmlFor="wd-your-email">School email: </label>
            <input
                type="email"
                id="wd-your-email"
                name="email"
                placeholder="jane@university.edu"
                defaultValue="jane@university.edu"
            />
            <br />
            <label htmlFor="wd-your-graduation">Expected graduation year: </label>
            <input
                type="number"
                id="wd-your-graduation"
                defaultValue={2028}
                min={2025}
                max={2035}
            />
            <br />
            <label htmlFor="wd-your-start-date">Program start date: </label>
            <input
                type="date"
                id="wd-your-start-date"
                defaultValue="2025-09-01"
            />
            <br />
            <label htmlFor="wd-your-excitement">Excitement about this course (0–10): </label>
            <input
                type="range"
                id="wd-your-excitement"
                min={0}
                max={10}
                defaultValue={8}
            />
            <br />
            <button id="wd-your-save" type="submit">
                Save
            </button>
            <button id="wd-your-cancel" type="button">
                Cancel
            </button>
        </form>
    );
}

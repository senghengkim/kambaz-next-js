import Link from "next/link";

export default async function AssignmentEditor({
    params,
}: {
    params: Promise<{ cid: string; aid: string }>;
}) {
    const { cid } = await params;
    return (
        <div id="wd-assignments-editor">
            <label htmlFor="wd-name">Assignment Name</label>
            <br />
            <br />
            <input id="wd-name" defaultValue="A1 - ENV + HTML" />
            <br />
            <br />
            <textarea
                id="wd-description"
                cols={45}
                rows={10}
                defaultValue="The assignment is available online Submit a link to the landing page of"
            />
            <br />
            <br />
            <table>
                <tbody>
                    <tr>
                        <td align="right" valign="top">
                            <label htmlFor="wd-points">Points</label>
                        </td>
                        <td>
                            <input id="wd-points" defaultValue={100} />
                        </td>
                    </tr>
                    <tr>
                        <td align="right" valign="top">
                            <label htmlFor="wd-group">Assignment Group</label>
                        </td>
                        <td>
                            <select id="wd-group" defaultValue="ASSIGNMENTS">
                                <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                                <option value="QUIZZES">QUIZZES</option>
                                <option value="EXAMS">EXAMS</option>
                                <option value="PROJECT">PROJECT</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td align="right" valign="top">
                            <label htmlFor="wd-display-grade-as">
                                Display Grade as
                            </label>
                        </td>
                        <td>
                            <select
                                id="wd-display-grade-as"
                                defaultValue="Percentage"
                            >
                                <option value="Percentage">Percentage</option>
                                <option value="Points">Points</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td align="right" valign="top">
                            <label htmlFor="wd-submission-type">
                                Submission Type
                            </label>
                        </td>
                        <td>
                            <select
                                id="wd-submission-type"
                                defaultValue="Online"
                            >
                                <option value="Online">Online</option>
                                <option value="On Paper">On Paper</option>
                                <option value="External Tool">
                                    External Tool
                                </option>
                            </select>
                            <br />
                            <br />
                            <label>Online Entry Options</label>
                            <br />
                            <input type="checkbox" id="wd-text-entry" />
                            <label htmlFor="wd-text-entry">Text Entry</label>
                            <br />
                            <input type="checkbox" id="wd-website-url" />
                            <label htmlFor="wd-website-url">Website URL</label>
                            <br />
                            <input type="checkbox" id="wd-media-recordings" />
                            <label htmlFor="wd-media-recordings">
                                Media Recordings
                            </label>
                            <br />
                            <input type="checkbox" id="wd-student-annotation" />
                            <label htmlFor="wd-student-annotation">
                                Student Annotation
                            </label>
                            <br />
                            <input type="checkbox" id="wd-file-upload" />
                            <label htmlFor="wd-file-upload">File Uploads</label>
                        </td>
                    </tr>
                    <tr>
                        <td align="right" valign="top">
                            <label>Assign</label>
                        </td>
                        <td>
                            <label htmlFor="wd-assign-to">Assign to</label>
                            <br />
                            <input id="wd-assign-to" defaultValue="Everyone" />
                            <br />
                            <br />
                            <label htmlFor="wd-due-date">Due</label>
                            <br />
                            <input
                                type="date"
                                id="wd-due-date"
                                defaultValue="2024-05-13"
                            />
                            <br />
                            <br />
                            <table>
                                <tbody>
                                    <tr>
                                        <td>
                                            <label htmlFor="wd-available-from">
                                                Available from
                                            </label>
                                            <br />
                                            <input
                                                type="date"
                                                id="wd-available-from"
                                                defaultValue="2024-05-06"
                                            />
                                        </td>
                                        <td>
                                            <label htmlFor="wd-available-until">
                                                Until
                                            </label>
                                            <br />
                                            <input
                                                type="date"
                                                id="wd-available-until"
                                                defaultValue="2024-05-20"
                                            />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                </tbody>
            </table>
            <hr />
            <table align="right">
                <tbody>
                    <tr>
                        <td>
                            <Link
                                href={`/courses/${cid}/assignments`}
                                id="wd-cancel"
                            >
                                Cancel
                            </Link>
                            &nbsp;
                            <Link
                                href={`/courses/${cid}/assignments`}
                                id="wd-save"
                            >
                                Save
                            </Link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

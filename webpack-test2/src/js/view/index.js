import Text from "../../config/config.text.json";
import styles from "../../css/common.css";

//const Text = require("../../config/config.text.json");

document.body.innerHTML =  `<div>
								<p class='${styles.p}'>${Text.content}</p>
								<a href='login.html'>To login.Go!</a>
							</div>`;

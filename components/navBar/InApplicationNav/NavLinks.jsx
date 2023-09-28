import styles from "./NavBar.module.css";
import { useRouter } from "next/router";
import { useIsMounted } from "../../../pages/hooks/useIsMounted";

const NavLinks = ({ user }) => {
	const router = useRouter();
	const mounted = useIsMounted();
	return (
		<div style={{ width: "100%" }}>
			{mounted && (
				<div className={styles.navLinks}>
					<ul>
						<div
							style={{
								height: "80%",
								display: "flex",
								flexDirection: "row",
								alignItems: "center",
							}}
						>
							{user && (
								<div className={styles.userImgContainer}>
									<img className={styles.userImg} src={user.image} alt="" />
								</div>
							)}

							{user && (
								<h2
									style={{
										whiteSpace: "nowrap",
										marginLeft: "20px",
										color: "#0093ff",
									}}
								>
									{user.name}
								</h2>
							)}
						</div>
						<div style={{ width: "100%", display: "flex", justifyContent: "flex-end" }}>
							<li>
								<button
									className={styles.startedButton}
									onClick={() => router.push(`/dashboard`)}
								>
									{"Dashboard"}
								</button>
							</li>
						</div>
					</ul>
				</div>
			)}
		</div>
	);
};

export default NavLinks;

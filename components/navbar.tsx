// components/navbar.tsx
import Link from "next/link";

export default function Navbar() {
    return (
        <nav style={styles.nav}>
            <div style={styles.logo}>Sample Website</div>
            <ul style={styles.ul}>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
}

// Simple inline styles for demonstration
const styles = {
    nav: {
        backgroundColor: "#333",
        padding: "1rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center", 
        color: "#fff"
    },
    logo: {
        color: "#fff",
        fontSize: "1.5rem",
        fontWeight: "bold"
    },
    ul: {
        listStyle: "none",
        margin: 0,
        padding: 0,
        display: "flex",
        gap: "1rem"
    }
};
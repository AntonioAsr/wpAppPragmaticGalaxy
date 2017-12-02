import Link from "next/link";

const hrStyle = {
    marginTop: 75
};

const Footer = () => (
    <div>
        <hr style={hrStyle} />
        <p>
            {/* <Link href="#"> */}
                <a>Made by Antonio Segovia with ❤️</a>
            {/* </Link>  */}
        </p>
        <p>
            👋 Want to say hi?{" "}
            <Link href="mailto:antoniosegoviaruiz@gmail.com?subject=I+want+to+say+Hi!">
                <a>Click me.</a>
            </Link>
        </p>
    </div>
);

export default Footer;

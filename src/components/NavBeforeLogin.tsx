import { useCallback, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NavBeforeLogin: React.FC = () => {
    const navigate = useNavigate();

    const onBtnLogin1Click = useCallback(() => {
        navigate("/login");
    }, [navigate]);

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav className="self-stretch bg-white h-[86px] fixed top-0 w-full z-10">
            <img
                className="absolute top-[calc(50%_-_23px)] left-[30px] w-[165px] h-[46px] object-cover"
                alt=""
                src="/logo@2x.png"
            />
            <button
                className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[calc(50%_-_20px)] right-[20px] w-[120px] h-10 bg-[url('/public/btnlogin1@3x.png')] bg-cover bg-no-repeat bg-[top]"
                onClick={onBtnLogin1Click}
            />
            {isScrolled && (
                <div className="absolute bottom-[0px] left-[0px] bg-gainsboro w-[1920px] h-px" />
            )}
        </nav>
    );
};

export default NavBeforeLogin;



import LoginForm from "@/components/LoginForm";
import Logo from "@/components/Logo";

import loginBg from "@/public/backgrounds/ecommerce.jpg";

const page = () => {
  return (
    <>
      <LoginForm backgroundSrc={loginBg.src} logo={<Logo />} infoText="If you require an account, please contact an admin." />
    </>
  );
};

export default page;

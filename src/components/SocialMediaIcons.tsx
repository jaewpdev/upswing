import FacebookSVG from "../../public/icons/facebook.svg";
import InstagramSVG from "../../public/icons/instagram.svg";
import MetaSVG from "../../public/icons/meta.svg";
import GoogleSVG from "../../public/icons/google.svg";

export default function SocialMediaIcons() {
  const socialMediaList = [FacebookSVG, InstagramSVG, MetaSVG, GoogleSVG];
  return (
    <ul className="grid grid-cols-4 xl:grid-cols-2 xl:grid-rows-2 min-w-[76px] w-fit gap-2">
      {socialMediaList.map((Icon) => (
        <Icon KEY={crypto.randomUUID()} className="w-10 col-span-1" />
      ))}
    </ul>
  );
}

import { Stack } from "@mui/material";
import {
  FacebookShareButton,
  LineShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "next-share";
import {
  FacebookIcon,
  LineIcon,
  TelegramIcon,
  TwitterIcon,
  WhatsappIcon,
} from "next-share";

const SHARE_URL = "https://joe-brothers.com/age-calculator/";

export const ShareButtons = () => {
  const onClickKakaoTalk = () => {
    window.Kakao.Link.createCustomButton({
      container: "#kakao-link-btn",
      templateId: 86175,
    });
  };

  return (
    <Stack direction="row" spacing={1} justifyContent="center">
      <TwitterShareButton url={SHARE_URL}>
        <TwitterIcon size={32} round={true} />
      </TwitterShareButton>
      <FacebookShareButton url={SHARE_URL}>
        <FacebookIcon size={32} round={true} />
      </FacebookShareButton>
      <LineShareButton url={SHARE_URL}>
        <LineIcon size={32} round={true} />
      </LineShareButton>
      <WhatsappShareButton url={SHARE_URL}>
        <WhatsappIcon size={32} round={true} />
      </WhatsappShareButton>
      <TelegramShareButton url={SHARE_URL}>
        <TelegramIcon size={32} round={true} />
      </TelegramShareButton>
      <button id="kakao-link-btn" onClick={onClickKakaoTalk}>
        share
      </button>
    </Stack>
  );
};

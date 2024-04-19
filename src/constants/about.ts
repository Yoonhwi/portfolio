import { IconType } from "react-icons";
import { FaUser } from "react-icons/fa";
import { FaBirthdayCake } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoSchoolSharp } from "react-icons/io5";
import { PhotoType } from ".";

export interface MyInfoType {
  key: string;
  value: string;
  icon: IconType;
}

export const photo: PhotoType[] = [
  {
    src: "photo1.jpg",
    text: "😀",
  },
  {
    src: "photo2.jpg",
    text: "😆",
  },
  {
    src: "photo3.jpg",
    text: "😋",
  },
];

export const myInfo: MyInfoType[] = [
  {
    key: "이름",
    value: "윤승휘",
    icon: FaUser,
  },
  {
    key: "생년월일",
    value: "96.01.05",
    icon: FaBirthdayCake,
  },
  {
    key: "주소지",
    value: "서울특별시 관악구",
    icon: FaLocationDot,
  },
  {
    key: "연락처",
    value: "010-5045-9248",
    icon: FaPhone,
  },
  {
    key: "이메일",
    value: "ush0105@naver.com",
    icon: MdEmail,
  },
  {
    key: "학력",
    value: "동서대컴공 중퇴",
    icon: IoSchoolSharp,
  },
];

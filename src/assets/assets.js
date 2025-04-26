import hero from "./hero_logo.png";
import vector53 from "./Vector_53.png";
import logo from "./logo.png";
import Phone_ico from "./Phone_ico.png";
import right_arrow from "./right_arrow.png";
import right_arrow_w from "./right_arrow_w.png";
import Social_Img from "./Social_Img.png";
import calendar from "./calendar.png";
import FaceBook_ico from "./FaceBook_ico.png";
import Insta_ico from "./Insta_ico.png";
import linkeIn_ico from "./linkeIn_ico.png";
import About_us_1 from "./About_us_1.png";
import About_us_2 from "./About_us_2.png";
import capsul from "./capsul.png";
import first_aid_box from "./first_aid_box.png";
import nursing_1 from "./Nursing_1.png";
import nursing_2 from "./Nursing_2.png";
import nursing_3 from "./Nursing_3.png";
import medical_service_1 from "./medical_service_1.png";
import medical_service_2 from "./medical_service_2.png";
import medical_service_3 from "./medical_service_3.png";
import Administrative_1 from "./Administrative_1.png";
import Administrative_2 from "./Administrative_2.png";
import Administrative_3 from "./Administrative_3.png";
import other_field_1 from "./other_field_1.png";
import other_field_2 from "./other_field_2.png";
import other_field_3 from "./other_field_3.png";
import Contact from "./Contact.png";

export const assets = {
  hero_logo: hero,
  vector_53: vector53,
  logo: logo,
  Phone_ico: Phone_ico,
  right_arrow: right_arrow,
  right_arrow_w: right_arrow_w,
  Social_Img: Social_Img,
  calendar: calendar,
  FaceBook_ico: FaceBook_ico,
  Insta_ico: Insta_ico,
  linkeIn_ico: linkeIn_ico,
  About_us_1: About_us_1,
  About_us_2: About_us_2,
  capsul: capsul,
  first_aid_box: first_aid_box,
  Nursing_1: nursing_1,
  Nursing_2: nursing_2,
  Nursing_3: nursing_3,
  medical_service_1: medical_service_1,
  medical_service_2: medical_service_2,
  medical_service_3: medical_service_3,
  Administrative_1: Administrative_1,
  Administrative_2: Administrative_2,
  Administrative_3: Administrative_3,
  other_field_1: other_field_1,
  other_field_2: other_field_2,
  other_field_3: other_field_3,
  Contact: Contact,
};

const data = [
  {
    date: "21-Apr-2025",
    description:
      "Convallis iaculis porttitor pellentesque bibendum netus, Est etiam himenaeos ridiculus",
  },
  {
    date: "22-Apr-2025",
    description: "Another example description for next day.",
  },
  {
    date: "23-Apr-2025",
    description:
      "Good care and regular checkups help people live healthier and longer lives.",
  },
  {
    date: "24-Apr-2025",
    description:
      "Our hospital team is always ready to support patients with kindness and respect.",
  },
];

export const nursingJobs = [
  {
    image: "Nursing_1", // just the key name (not string like 'assets.Nursing_1')
    title: "Strong care and support",
    description:
      "A light and effective approach to support with seamless care delivery.",
    types: ["Full-time", "Part-time"],
    button: "Apply now",
  },
  {
    image: "Nursing_2",
    title: "Caring with passion",
    description:
      "We provide gentle and expert care with thoughtful attention to every detail.",
    types: ["Full-time", "Part-time"],
    button: "Apply now",
  },
  {
    image: "Nursing_3",
    title: "Compassion meets professionalism",
    description:
      "We deliver nursing with both heart and skill in every situation.",
    types: ["Full-time", "Part-time"],
    button: "Apply now",
  },
];

export const medicalJobs = [
  {
    image: "medical_service_1",
    title: "Smooth Checkups",
    description:
      "Offers safe and professional care for patients with full dedication and service.",
    types: ["Full-time", "Part-time"],
    button: "Apply now",
  },
  {
    image: "medical_service_2",
    title: "Trusted Medical Help",
    description:
      "Provides emergency support, proper attention, and ensures the safety of patients.",
    types: ["Full-time", "Part-time"],
    button: "Apply now",
  },
  {
    image: "medical_service_3",
    title: "Strong Healthcare Support",
    description:
      "We help with professional and caring services. Your health is our priority.",
    types: ["Full-time", "Part-time"],
    button: "Apply now",
  },
];

export const jobOffersManagement = [
  {
    title: "Living freely",
    description:
      "Living freely with ease and without any constraints, always maintaining a natural flow in life.",
    types: ["Full-time", "Part-time"],
    button: "Apply now",
    image: "Administrative_3",
  },
  {
    title: "Smooth leadership",
    description:
      "Leading smoothly with a calm demeanor and wise decisions, guiding teams through challenges with ease.",
    types: ["Full-time", "Part-time"],
    button: "Apply now",
    image: "Administrative_2",
  },
  {
    title: "Managing through experience",
    description:
      "Managing challenges effectively by relying on experience, handling tough situations with confidence and skill.",
    types: ["Full-time", "Part-time"],
    button: "Apply now",
    image: "Administrative_1",
  },
];

export const jobOffersOtherAreas = [
  {
    title: "Leading with expertise",
    description:
      "Leading with a deep understanding of the field, bringing knowledge and experience to guide the way.",
    types: ["Full-time", "Part-time"],
    button: "Apply now",
    image: "other_field_3",
  },
  {
    title: "Guiding with wisdom",
    description:
      "Providing guidance with a combination of experience and knowledge, leading others to make wise decisions.",
    types: ["Full-time", "Part-time"],
    button: "Apply now",
    image: "other_field_2",
  },
  {
    title: "Building progress",
    description:
      "Creating a path towards success and growth, constructing a framework that leads to continuous improvement.",
    types: ["Full-time", "Part-time"],
    button: "Apply now",
    image: "other_field_1",
  },
];

export default data;

import React from "react";
import { Page, Text, View, Document, Font } from "@react-pdf/renderer";
import { createTw } from "react-pdf-tailwind";
import ReactPDF from "@react-pdf/renderer";

const experienceSubsections = [
  {
    title: "Repact",
    range: "2022-2024",
    subsections: [
      {
        title: "Software Engineer: Jan 2023 - present",
        items: [
          "Integrated Stripe API for payment processing to facilitate customer self-sign-up.",
          "Architected and managed on-premise data servers.",
          "Mentored and assisted coworkers with Node.js, React, and linux.",
        ],
      },
      {
        title: "Junior Software Engineer: May 2022 - Jan 2023",
        items: [
          "Wrote and maintained systems for customer data acquisition.",
          "Used Jira for sprint tracking and planning.",
        ],
      },
    ],
  },
  {
    title: "Nascent Labs",
    range: "2021-2022",
    subsections: [
      {
        title: "Software Engineer Intern: Sept 2021 - May 2022",
        items: [
          "Received hands-on experience writing customer-facing features and applications.",
          "Used Git and Bitbucket to collaborate with other engineers.",
          "Learned the software development life cycle.",
          "Learned about and implemented software development best practices, including CI/CD.",
        ],
      },
    ],
  },
];

const skillsSubsections = [
  {
    title: "Programming",
    subsections: [
      {
        title: "Web Development",
        items: [
          "Proficient in full-stack Javascript; front-end using React, along with back-end using node.js",
          "HTML and CSS",
        ],
      },
      {
        title: "Mobile Development",
        items: ["Proficient in React Native", "Proficient in SwiftUI"],
      },
      {
        title: "Game Development",
        items: [
          "Experience with Godot, Unreal Engine and Unity.",
          "Proficient in C++",
          "Proficient in Java",
        ],
      },
    ],
  },
  {
    title: "Dev Ops",
    subsections: [
      {
        title: "AWS",
        items: [
          "Proficient with using Lambda and S3 to host react websites",
          "Proficient with AWS CDK, Serverless Stack (SST), and Serverless Framework to write infrastructure as code",
          "AWS Certified Cloud Practitioner",
        ],
      },
      {
        title: "Linux",
        items: [
          "Experience configuring Linux at a low level",
          "Wrote linux startup scripts",
          "Wrote a system configuration script to allow for fast spin up of new servers",
        ],
      },
    ],
  },
];

const projectSubsections = [
  {
    title: "Game Development",
    subsections: [
      {
        title: "Single Player Cat Platformer",
        items: ["A self-made Godot cat platforming game."],
      },
      {
        title: "Minecraft mods and plugins",
        items: [
          "Used Java to build Minecraft server plugins for myself and for pay.",
        ],
      },
    ],
  },
  {
    title: "App Development",
    subsections: [
      {
        title: "TradeFrog",
        items: ["An options trading journaling web application."],
      },
      {
        title: "Lets Play Music",
        items: ["A mobile app to connect music teachers to students."],
      },
    ],
  },
];

Font.register({
  family: "Mononoki",
  fonts: [
    { src: "./fonts/mononoki-Regular.ttf" },
    { src: "./fonts/mononoki-Bold.ttf", fontWeight: "bold" },
    { src: "./fonts/mononoki-Italic.ttf", fontStyle: "italic" },
  ],
});

Font.register({
  family: "Jetbrains",
  fonts: [
    { src: "./fonts/jetbrains/JetBrainsMono-Regular.ttf" },
    { src: "./fonts/jetbrains/JetBrainsMono-Bold.ttf", fontWeight: "bold" },
    { src: "./fonts/jetbrains/JetBrainsMono-Light.ttf", fontWeight: "light" },
    { src: "./fonts/jetbrains/JetBrainsMono-Italic.ttf", fontStyle: "italic" },
  ],
});

const tw = createTw({
  theme: {
    fontFamily: {
      sans: ["Helvetica"],
      mononoki: ["Mononoki"],
      jetbrains: ["Jetbrains"],
    },
  },
});

const SimpleSection = ({ title, subtitle, range }) => {
  return (
    <View style={tw("mt-6")}>
      <Text style={tw("text-base text-purple-500")}>{title}</Text>
      <View style={tw("ml-4")}>
        <View style={tw("flex flex-row justify-between items-baseline")}>
          <Text style={tw("text-sm")}>{subtitle}</Text>
          <Text style={tw("text-sm")}>{range}</Text>
        </View>
      </View>
    </View>
  );
};

const Section = ({ title, subsections }) => {
  const subItemSectionItems = (subsection, index) => (
    <>
      <Text style={tw(`font-bold text-xs${index == 0 ? "" : " pt-2"} pb-0.5`)}>
        {subsection.title}
      </Text>
      <View style={tw("ml-4")}>
        {subsection.items?.map((subitem, index) => (
          <Text style={tw(`text-xs text-gray-600${index == 0 ? "" : " pt-1"}`)}>
            - {subitem}
          </Text>
        ))}
      </View>
    </>
  );

  const subsectionsItems = subsections?.map((item, index) => (
    <>
      <View
        key={item.title}
        style={tw(
          `flex flex-row justify-between items-baseline${
            index == 0 ? "" : " pt-2"
          }`
        )}
      >
        <Text style={tw("text-sm")}>{item.title}</Text>
        <Text style={tw("text-sm")}>{item.range}</Text>
      </View>
      <View style={tw("ml-4")}>
        {item.subsections.map(subItemSectionItems)}
      </View>
    </>
  ));

  return (
    <View style={tw("mt-6")}>
      <Text style={tw("text-base text-purple-500")}>{title}</Text>
      <View style={tw("ml-4")}>{subsectionsItems}</View>
    </View>
  );
};

const Resume = () => (
  <Document>
    <Page size="A4" style={tw("p-14 pt-6 pb-6 font-jetbrains")}>
      <View>
        <Text style={tw("text-purple-500")}>Crew Bindrup</Text>
        <View style={tw("flex items-baseline justify-between flex-row")}>
          <Text style={tw("pt-2 text-xs")}>12301 Mariah Circle</Text>
          <Text style={tw("pt-1 text-xs")}>(801) 232-7056</Text>
        </View>
        <View style={tw("flex items-baseline justify-between flex-row")}>
          <Text style={tw("pt-1 text-xs")}>Draper, UT 84020</Text>
          <Text style={tw("pt-1 text-xs")}>crewbindrup@gmail.com</Text>
        </View>
      </View>
      <Section title="Experience" subsections={experienceSubsections} />
      <SimpleSection
        title="Education"
        subtitle={"B.S. Computer Science, Utah Tech University"}
        range={"2026 (expected)"}
      />
      <Section title="Skills" subsections={skillsSubsections} />
      <Section title="Projects" subsections={projectSubsections} />
      <View style={tw("absolute bottom-4 right-6 text-neutral-300")}>
        <Text style={tw("text-xs")}>
          Created with react-pdf: https://github.com/crewbindrup/resume
        </Text>
      </View>
    </Page>
  </Document>
);

ReactPDF.render(<Resume />, `./resume.pdf`);

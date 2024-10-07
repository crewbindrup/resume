import React from "react";
import { Page, Text, View, Document } from "@react-pdf/renderer";
import { createTw } from "react-pdf-tailwind";

import ReactPDF from "@react-pdf/renderer";

const tw = createTw({
  theme: {
    extend: {
      colors: {
        custom: "#bada55",
      },
    },
  },
});

const Resume = () => (
  <Document>
    <Page size="A4" style={tw("p-16")}>
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
      <View style={tw("mt-8")}>
        <Text style={tw("text-base text-purple-500")}>Experience</Text>
        <View style={tw("ml-4")}>
          <View style={tw("flex flex-row justify-between items-baseline")}>
            <Text style={tw("text-sm")}>Repact</Text>
            <Text style={tw("text-sm")}>2022-2024</Text>
          </View>
          <View style={tw("ml-4")}>
            <Text style={tw("text-sm")}>
              - Software Engineer: Jan 2023 - present
            </Text>
            <View style={tw("ml-4")}>
              <Text style={tw("text-xs text-gray-600")}>- I wrote code.</Text>
            </View>
            <Text style={tw("text-sm pt-1")}>
              - Junior Software Engineer: May 2022 - Jan 2023
            </Text>
            <View style={tw("ml-4")}>
              <Text style={tw("text-xs text-gray-600")}>- I wrote code.</Text>
            </View>
          </View>
        </View>
        <View style={tw("ml-4 mt-4")}>
          <View style={tw("flex flex-row justify-between items-baseline")}>
            <Text style={tw("text-sm")}>Nascent Labs</Text>
            <Text style={tw("text-sm")}>2021-2022</Text>
          </View>
          <View style={tw("ml-4")}>
            <Text style={tw("text-sm")}>
              - Software Engineer Intern: Sept 2021 - May 2022
            </Text>
            <View style={tw("ml-4")}>
              <Text style={tw("text-xs text-gray-600")}>- I wrote code.</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={tw("mt-8")}>
        <Text style={tw("text-base text-purple-500")}>Education</Text>
        <View style={tw("ml-4")}>
          <View style={tw("flex flex-row justify-between items-baseline")}>
            <Text style={tw("text-sm")}>
              B.S. IN COMPUTER SCIENCE, UTAH TECH UNIVERSITY
            </Text>
            <Text style={tw("text-sm")}>2026 (expected)</Text>
          </View>
        </View>
      </View>
      <View style={tw("mt-8")}>
        <Text style={tw("text-base text-purple-500")}>Skills</Text>
        <View style={tw("ml-4")}>
          <View style={tw("flex flex-row justify-between items-baseline")}>
            <Text style={tw("text-sm")}>Programming</Text>
          </View>
          <View style={tw("ml-4")}>
            <Text style={tw("text-sm")}>- Web Development</Text>
            <View style={tw("ml-4")}>
              <Text style={tw("text-xs text-gray-600")}>
                - Proficient in full-stack Javascript; front-end using React,
                along with node.js
              </Text>
              <Text style={tw("pt-1 text-xs text-gray-600")}>
                - HTML and CSS
              </Text>
            </View>
            <Text style={tw("text-sm pt-1")}>- Game Development</Text>
            <View style={tw("ml-4")}>
              <Text style={tw("text-xs text-gray-600")}>
                - Experience with Godot, Unreal Engine and Unity.
              </Text>
              <Text style={tw("pt-1 text-xs text-gray-600")}>
                - Proficient in C++
              </Text>
              <Text style={tw("pt-1 text-xs text-gray-600")}>
                - Proficient in Java
              </Text>
              <View style={tw("ml-4")}>
                <Text style={tw("mt-1 text-xs text-gray-600")}>
                  - Used to create Minecraft server plugins for fun and for pay
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={tw("mt-8")}>
        <Text style={tw("text-base text-purple-500")}>Projects</Text>
        <View style={tw("ml-4")}>
          <View style={tw("flex flex-row justify-between items-baseline")}>
            <Text style={tw("text-sm")}>Game Development</Text>
          </View>
          <View style={tw("ml-4")}>
            <Text style={tw("text-sm")}>- Single player cat platformer</Text>
            <View style={tw("ml-4")}>
              <Text style={tw("text-xs text-gray-600")}>Meow</Text>
            </View>
          </View>
          <View style={tw("flex flex-row justify-between items-baseline pt-2")}>
            <Text style={tw("text-sm")}>Web Development</Text>
          </View>
          <View style={tw("ml-4")}>
            <Text style={tw("text-sm")}>- TradeFrog</Text>
            <View style={tw("ml-4")}>
              <Text style={tw("text-xs text-gray-600")}>
                An options trading journaling web application.
              </Text>
            </View>
            <Text style={tw("text-sm mt-1")}>- Let's Play Music</Text>
            <View style={tw("ml-4")}>
              <Text style={tw("text-xs text-gray-600")}>
                A webapp to connect music teachers to students.
              </Text>
            </View>
          </View>
        </View>
      </View>
    </Page>
  </Document>
);

ReactPDF.render(<Resume />, `./resume.pdf`);

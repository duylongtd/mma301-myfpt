import { useContext, useEffect, useState } from "react";
import { SectionList, StyleSheet, Text, View } from "react-native";
import DataRender from "./DataRender";
import { SearchContext } from "../MainLayout";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
    width: "100%",
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: "bold",
    backgroundColor: "#B5B2B5",
    color: "#767479",
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

const list = [
  {
    title: "UTILITIES",
    data: [
      {
        image:
          "https://img1.pnghut.com/18/12/20/FhQUwrjcE5/area-brand-logo-orange-fpt-polytechnic.jpg",
        label: "FPT Care",
        description: "FPT Care",
      },
      {
        image:
          "https://img1.pnghut.com/18/12/20/FhQUwrjcE5/area-brand-logo-orange-fpt-polytechnic.jpg",
        label: "Events",
        description:
          "Register, check-in, check-out, send feedback to company events and programs",
      },
      {
        image:
          "https://img1.pnghut.com/18/12/20/FhQUwrjcE5/area-brand-logo-orange-fpt-polytechnic.jpg",
        label: "Survey",
        description:
          "Conduct and collect responses for company-wide or departmental-wide surveys",
      },
      {
        image:
          "https://img1.pnghut.com/18/12/20/FhQUwrjcE5/area-brand-logo-orange-fpt-polytechnic.jpg",
        label: "FPT Dating",
        description: "Dating feature",
      },
      {
        image:
          "https://img1.pnghut.com/18/12/20/FhQUwrjcE5/area-brand-logo-orange-fpt-polytechnic.jpg",
        label: "Payslip",
        description: "Payslip",
      },
      {
        image:
          "https://img1.pnghut.com/18/12/20/FhQUwrjcE5/area-brand-logo-orange-fpt-polytechnic.jpg",
        label: "Birthday",
        description:
          "Your birthday is a special moment. We're very happy to send the best wishes for you. Colleagues can send you birthday wishes on FPT.",
      },
    ],
  },
  {
    title: "NEWS",
    data: [
      {
        image:
          "https://img1.pnghut.com/18/12/20/FhQUwrjcE5/area-brand-logo-orange-fpt-polytechnic.jpg",
        label: "News",
        description:
          "A collection of latest news and notable events around the company",
      },
      {
        image:
          "https://img1.pnghut.com/18/12/20/FhQUwrjcE5/area-brand-logo-orange-fpt-polytechnic.jpg",
        label: "Star Ave",
        description:
          "Recognize notable achievements  within a business unit or within FPT",
      },
    ],
  },
  {
    title: "WIKI",
    data: [
      {
        image:
          "https://img1.pnghut.com/18/12/20/FhQUwrjcE5/area-brand-logo-orange-fpt-polytechnic.jpg",
        label: "Employee Info",
        description:
          "Basic, non-confidential employee information (name, gender, department, etc.)",
      },
    ],
  },
  {
    title: "GAME",
    data: [
      {
        image:
          "https://img1.pnghut.com/18/12/20/FhQUwrjcE5/area-brand-logo-orange-fpt-polytechnic.jpg",
        label: "Game",
        description: "Community engaging games with Gold as rewards",
      },
    ],
  },
];

interface SectionListCustomProps {
  title: string;
  data: { image: string; label: string; description: string }[];
}

const SectionListCustom = () => {
  const { searchText } = useContext(SearchContext);
  const [data, setData] = useState<SectionListCustomProps[]>([]);

  useEffect(() => {
    if (!searchText) {
      setData(list);
      return;
    }
    let result: SectionListCustomProps[] = [];

    //loop through the list of sections and filter the data
    list.forEach((section) => {
      const filteredData = section.data.filter((item) =>
        item.label.toLowerCase().includes(searchText.toLowerCase())
      );

      if (filteredData.length > 0) {
        result.push({ title: section.title, data: filteredData });
      }
    });

    //set the filtered data
    setData(result);
  }, [searchText]);
  return (
    <View style={styles.container}>
      <SectionList
        sections={data}
        renderItem={({ item }) => <DataRender {...item} />}
        renderSectionHeader={({ section }) => (
          <Text style={styles.sectionHeader}>{section.title}</Text>
        )}
        keyExtractor={(item) => `basicListEntry-${item.label}`}
      />
    </View>
  );
};

export default SectionListCustom;

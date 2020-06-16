import React from 'react';

import {
  PDFDownloadLink,
  Page,
  Image,
  Text,
  View,
  Document,
  StyleSheet,
} from '@react-pdf/renderer';
import SiteContext from '../model/SiteContext';
import { Typography } from '@material-ui/core';

const styles = StyleSheet.create({
  page: {
    // flexDirection: 'row',
    backgroundColor: '#fff',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  pdf: {
    textDecoration: 'none',
    color: 'black',
  },
});

// Create Document Component
const MyDocument = ({ state }) => {
  // Use all pages in here! (need to pass state in)
  const pages = [];

  state.pages.forEach((page) => {
    // console.log(page.pageTemplate);

    pages.push(
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Image src={page.fields.pic1}></Image>
          <Text> {page.fields.text1}</Text>
        </View>
        {page.pageTemplate === 'Landscape2' ? (
          <View>
            <Image src={page.fields.pic2}></Image>
            <Text> {page.fields.text2}</Text>
          </View>
        ) : null}
      </Page>,
    );
  });
  return <Document>{pages}</Document>;
};

function RenderStory({ hasPressedDownload }) {
  const [state] = React.useContext(SiteContext);

  if (hasPressedDownload)
    return (
      <PDFDownloadLink
        style={styles.pdf}
        document={<MyDocument state={state} />}
        fileName="prepare-me-story.pdf"
      >
        {({ blob, url, loading, error }) =>
          loading ? (
            <Typography>'Loading document...' </Typography>
          ) : (
            <Typography>Download</Typography>
          )
        }
      </PDFDownloadLink>
    );
  return null;
}

export default RenderStory;

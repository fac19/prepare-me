import React from 'react';

import {
  PDFDownloadLink,
  Page,
  Image,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
} from '@react-pdf/renderer';
import SiteContext from '../model/SiteContext';
import { Typography } from '@material-ui/core';
import font from '../fonts/ShortStack-Regular.ttf';
// import Landscape1 from './pageTemplates/Landscape1';
Font.register({
  family: 'Short Stack',
  src: font,
  fontStyle: 'normal',
  fontWeight: 'normal',
});

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

  storyText: {
    fontFamily: 'Short Stack',
    fontSize: '2vh',
    width: '100%',
    minHeight: '40%',
    border: 0,
  },

  storyImage: {
    width: '100%',
    maxHeight: '60%',
    objectFit: 'contain',
  },
});

// Create Document Component
const MyDocument = ({ state }) => {
  // Use all pages in here! (need to pass state in)
  const pages = [];

  state.pages.forEach((page, index) => {
    pages.push(
      <Page size="A4" style={styles.page} key={index}>
        <View style={styles.section}>
          <Image src={page.fields.pic1} style={styles.storyImage}></Image>
          <Text style={styles.storyText}> {page.fields.text1} </Text>
        </View>
        {page.pageTemplate === 'Landscape2' ? (
          <View style={styles.section}>
            <Image src={page.fields.pic2} style={styles.storyImage}></Image>
            <Text style={styles.storyText}> {page.fields.text2} </Text>
          </View>
        ) : null}
        {page.pageTemplate === 'Portrait2' ? (
          <View style={styles.section}>
            <Image src={page.fields.pic2} style={styles.storyImage}></Image>
            <Text style={styles.storyText}> {page.fields.text2} </Text>
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

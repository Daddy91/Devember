import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, { PropsWithChildren } from 'react'
import Markdown from 'react-native-markdown-display';

const copy = `# Sample Markdown Contents

## Introduction

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in libero non quam vehicula varius.

## Lists

### Unordered List

- Item 1
- Item 2
- Item 3

### Ordered List

1. First item
2. Second item
3. Third item

## Text Styling

**Bold Text**

*Italic Text*

## Links

[Visit OpenAI](https://www.openai.com/)

## Images

![Alt text](https://publichealth.utk.edu/wp-content/uploads/sites/20/2021/11/board-ge7e8350fa_1280-150x150.jpg)

## Blockquotes

> This is a blockquote. Lorem ipsum dolor sit amet, consectetur adipiscing elit.

## Code

`;

const MarkdownDisplay = ({children}: PropsWithChildren) => {
  return (
    <ScrollView style={styles.page} contentInsetAdjustmentBehavior='automatic'>
      <Markdown style={markdownStyles}>{children}</Markdown>
    </ScrollView>
  );
};

const markdownStyles = StyleSheet.create({
    heading1:{
        fontFamily:'InterBlack',
        color:'#404040',
        marginTop:10,
        marginBottom:5,
        lineHeight: 40,
    },
    heading2:{
        fontFamily:'InterBold',
        color:'#404040',
        marginTop:10,
        marginBottom:5,
        lineHeight: 30,
    },
    body:{
      fontSize:16,
      //fontFamily:'Inter',
      lineHeight: 24,
    }
});

const styles = StyleSheet.create({
    page:{
        backgroundColor:'white',
        flex:1,
        padding:1,
        borderRadius:10,
    }
})

export default MarkdownDisplay
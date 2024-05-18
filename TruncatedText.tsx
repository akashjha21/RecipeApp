import React from 'react';
import { Text } from 'react-native';

const truncateText = (text:string) => {
  if (typeof text !== 'string') {
    return '';
  }
  if (text.length <= 25) {
    return text;
  } else {
    return text.slice(0, 25) + '...';
  }
};

const TruncatedText = ({text}:any) => {
  const truncated = truncateText(text);
  return <Text style={{zIndex:10, color:'#FFFFFF', fontSize:19, fontWeight:'700', marginTop:1, marginLeft:7, position:'absolute', left:0, bottom:5, textShadowColor:'#000', textShadowRadius:10, textShadowOffset:{height:-1, width:1}}}>{truncated}</Text>;
};

export default TruncatedText;

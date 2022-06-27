import { View } from 'react-native';
export const Ret2 = ()=> {
    return(
        <View style={{flex:1}}>
            <View style={{flexDirection: "row"}}> 
                <View style={{ flex:1, height: 78, backgroundColor: "#9013FE"}}/>
                <View style={{ flex:1, height: 78, backgroundColor: "#4A90E2"}}/>  
            </View>
            <View style={{ height: 13, backgroundColor: "#50E3C2"}}/> 
        </View>
        
        
    )
}
import { View } from 'react-native';

export const Quad2 = ()=> {
    return (
    <View style={{flex:3}}>
         <View style={{flex: 1, justifyContent: "space-around", alignItems: "center", flexDirection: "row"}}> 
            <View style={{ width: 100, height: 100 , backgroundColor: "#F5A623"}}/>
            <View style={{ width: 100, height: 100 , backgroundColor: "#F5A623"}}/>
            <View style={{ width: 100, height: 100 , backgroundColor: "#F5A623"}}/> 
        </View>
        <View style={{flex: 1  , justifyContent: "space-around", alignItems: "center", flexDirection: "row"}}> 
            <View style={{ width: 100, height: 100 , backgroundColor: "#F5A623"}}/>
            <View style={{ width: 100, height: 100 , backgroundColor: "#F5A623"}}/>
            <View style={{ width: 100, height: 100 , backgroundColor: "#F5A623"}}/> 
        </View>
    </View>
   )
}
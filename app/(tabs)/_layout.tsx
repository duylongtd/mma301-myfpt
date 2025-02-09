import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";

import { HapticTab } from "@/components/HapticTab";
import { IconSymbol } from "@/components/ui/IconSymbol";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: "absolute",
          },
          default: {},
        }),
        tabBarLabelPosition: "below-icon",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="house.fill" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="all-app"
        options={{
          title: "All Apps",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="tray.fill" color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="gold-page"
        options={{
          title: "Gold",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="bitcoinsign.circle.fill" color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="game"
        options={{
          title: "Game",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="gamecontroller.fill" color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="folder.fill.badge.person.crop" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

import 'dart:ui';

import 'package:flutter/material.dart';

void main() {
  runApp(MaterialApp(
    debugShowCheckedModeBanner: false,
    home: MacOSTaskbar(),
  ));
}

class MacOSTaskbar extends StatefulWidget {
  @override
  _MacOSTaskbarState createState() => _MacOSTaskbarState();
}

class _MacOSTaskbarState extends State<MacOSTaskbar> {
  final List<String> buttons = [
    "Finder",
    "App Store",
    "Photos",
    "Settings",
    "Apps"
  ];
  String? draggingItem;
  String? hoveredButton;
  bool isRowHovered = false;
  int? targetIndex;
  final Map<String, AssetImage> buttonImages = {
    "Finder": const AssetImage(
      "assets/1.png",
    ),
    "App Store": const AssetImage("assets/2.png"),
    "Photos": const AssetImage("assets/3.png"),
    "Settings": const AssetImage("assets/4.png"),
    "Apps": const AssetImage("assets/5.png"),
  };

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Stack(
        alignment: Alignment.bottomCenter,
        children: [
          Image.asset(
            "assets/bg.jpg",
            fit: BoxFit.cover,
            width: double.infinity,
          ),
          Padding(
            padding: const EdgeInsets.only(bottom: 10.0),
            child: MouseRegion(
              onEnter: (_) {
                setState(() {
                  isRowHovered = true;
                });
              },
              onExit: (_) {
                setState(() {
                  isRowHovered = false;
                });
              },
              child: ClipRRect(
                borderRadius: BorderRadius.circular(8.0),
                child: BackdropFilter(
                  filter: ImageFilter.blur(sigmaX: 10.0, sigmaY: 10.0),
                  child: Container(
                    decoration: BoxDecoration(
                      color: Colors.white.withOpacity(0.12),
                      borderRadius: BorderRadius.circular(20.0),
                    ),
                    child: Padding(
                      padding: const EdgeInsets.all(8.0),
                      child: Row(
                        mainAxisSize: MainAxisSize.min,
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: buttons
                            .map(
                              (button) => draggingItem != button
                                  ? buildDraggableButton(button)
                                  : const SizedBox.shrink(),
                            )
                            .toList(),
                      ),
                    ),
                  ),
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }

  Widget buildDraggableButton(String button) {
    return Tooltip(
      message: button,
      verticalOffset: -70,
      enableFeedback: false,
      textAlign: TextAlign.center,
      child: MouseRegion(
        onEnter: (_) {
          setState(() {
            hoveredButton = button;
          });
        },
        onExit: (_) {
          setState(() {
            hoveredButton = null;
          });
        },
        child: Draggable<String>(
          data: button,
          onDragStarted: () {
            setState(() {
              draggingItem = button;
            });
          },
          onDragCompleted: () {
            setState(() {
              draggingItem = null;
            });
          },
          onDraggableCanceled: (_, __) {
            setState(() {
              draggingItem = null;
            });
          },
          feedback: Material(
            color: Colors.transparent,
            child: buildButton(button, buttonImages[button]!, scale: 1.2),
          ),
          childWhenDragging: buildButton(button, buttonImages[button]!),
          child: DragTarget<String>(
            onAccept: (draggedButton) {
              setState(() {
                final draggedIndex = buttons.indexOf(draggedButton);
                targetIndex = buttons.indexOf(button);

                buttons.removeAt(draggedIndex);
                buttons.insert(targetIndex ?? 0, draggedButton);

                draggingItem = null;
              });
            },
            builder: (context, candidateData, rejectedData) {
              return AnimatedContainer(
                duration: const Duration(milliseconds: 300),
                curve: Curves.easeInOut,
                transform: Matrix4.identity()
                  ..scale(hoveredButton == button
                      ? 1.2
                      : (isRowHovered ? 1.1 : 1.0))
                  ..translate(0, hoveredButton == button ? -10.0 : 0),
                child: buildButton(
                  button,
                  draggingItem == button
                      ? buttonImages[button]!
                      : buttonImages[button]!,
                ),
              );
            },
          ),
        ),
      ),
    );
  }

  Widget buildButton(String label, AssetImage image, {double scale = 1.0}) {
    return Padding(
      padding: const EdgeInsets.all(4.0),
      child: AnimatedContainer(
        duration: const Duration(milliseconds: 300),
        curve: Curves.easeInOut,
        width: 60 * scale,
        height: 60 * scale,
        decoration: BoxDecoration(
          image: DecorationImage(image: image, fit: BoxFit.fill),
          borderRadius: BorderRadius.circular(10),
        ),
      ),
    );
  }
}

# Portfolio.College

College coursework portfolio from Ajou University (Information & Computer Engineering).  
Homework assignments and team projects across five courses, written in C, C++, Java, PHP, and Arduino (C/C++).

---

## Repository Structure

```
Portfolio.College/
├── Algorithm/                  # Algorithm course homework
│   └── Homework/               # Exact cover via DFS + subset-cover solver (C)
├── Algorithm_Retry/            # Algorithm retake
│   └── Permutation/            # Next-permutation generator (C++)
├── ComputerPrograming/         # Introductory C programming course
│   ├── Homework1/              # Car insurance premium calculator (C)
│   ├── Homework2/              # Monte-Carlo simulation: Dart game & Buffon's needle (C)
│   └── Homework3/              # Korean travel board game — "KoreanRoot" (C, 40-cell Monopoly-style)
├── DataStructure/              # Data structures course
│   ├── Homework1/              # Graph algorithms: DFS/BFS, biconnected components (C)
│   └── Homework2/              # Maze solver using a stack (C)
├── ObjectOrientedPrograming/   # OOP course (C++)
│   ├── Homework1/              # Product / sale management console app
│   ├── Homework2/              # Vending-machine simulation with shopping cart
│   └── Homework3/              # In-memory filesystem tree (Directory / DataTree)
└── SystemPrograming/           # System programming capstone team project
    └── CarPoly/                # IoT car-sharing system
        ├── Source/Android/     # Android client (Java, XML layouts)
        ├── Source/Arduino/     # Arduino firmware (C/C++)
        ├── Source/Embedded/    # Linux embedded-board server (C, MySQL, pthreads)
        └── Source/Server/      # PHP REST backend (MySQL)
```

---

## Courses & Tech Stack

| Course | Language / Platform | Key Topics |
|--------|---------------------|------------|
| Computer Programming | C | Procedural programming, stdio |
| Algorithm | C | Backtracking, subset-cover, DFS |
| Data Structures | C | Graphs, BFS/DFS, stacks, maze |
| Object-Oriented Programming | C++ | Classes, inheritance, file I/O |
| System Programming | C / C++ / Java / PHP / Arduino | Embedded Linux, MySQL, Android, IoT |

---

## Notable Project — CarPoly (System Programming Capstone)

A multi-platform IoT car-sharing system built as a team project:

- **Android app** — user registration, car lock/unlock, usage statistics
- **Arduino firmware** — communicates with embedded board over serial (115200 baud)
- **Embedded board (Linux)** — C daemon using `pthreads`, MySQL client, camera, OLED/FND displays, buzzer
- **PHP backend** — REST-style API for login, join-check, lock, emergency, permit-list

---

## Setup

### Prerequisites

| Component | Requirement |
|-----------|-------------|
| C / C++ assignments | GCC or MSVC |
| Android project | Android Studio, SDK API 16+ |
| Embedded board code | ARM Linux cross-compiler, `libmysqlclient`, `pthreads` |
| PHP backend | PHP 7+, MySQL 5.7+ |
| Arduino | Arduino IDE 1.8+ |

### Build a C/C++ assignment

```bash
# Example — Algorithm homework
gcc Algorithm/Homework/code.c -o cover

# Example — Permutation (C++)
g++ Algorithm_Retry/Permutation/permutation.cpp -o permutation

# Example — DataStructure Homework2 (maze)
gcc DataStructure/Homework2/source.c -o maze

# Example — OOP Homework2 (vending machine)
g++ ObjectOrientedPrograming/Homework2/source/*.cpp -o vending
```

### CarPoly — embedded board

```bash
# Install dependencies (Debian/Ubuntu-based ARM board)
sudo apt-get install libmysqlclient-dev

# Compile
gcc SystemPrograming/CarPoly/Source/Embedded/source/carpoly.c \
    -o carpoly -lmysqlclient -lpthread

# Run
./carpoly
```

### CarPoly — PHP backend

1. Copy files in `SystemPrograming/CarPoly/Source/Server/` to your web root.
2. Edit `config.php` — set `DB_HOST`, `DB_NAME`, `DB_ROOT`, `DB_PW` for your MySQL instance.
3. Import the database schema (not included; create manually or restore from backup).

### CarPoly — Android

Open `SystemPrograming/CarPoly/Source/Android/` in Android Studio and build / run on a device or emulator.

---

## Usage

Each homework folder is self-contained:

- C / C++ programs read input from `stdin` (or from text files passed as arguments where noted).
- The `ComputerPrograming/Homework3/texts/` directory contains Korean location data files required by `KoreanRoot.c`.
- The `DataStructure/Homework1/source and text/` directory contains sample graph input/output files for `Graph.c`.

---

## Notes

- Source files use EUC-KR encoding (Korean comments); open with a matching encoding if characters appear garbled.
- `Algorithm/Homework/code.c` is a partial snapshot — some preprocessor directives and string literals were stripped; it requires minor restoration before compiling.
- Credentials hard-coded in `config.php` and `carpoly.c` point to the original development server and are no longer valid.

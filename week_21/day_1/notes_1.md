## Week 21 - Day 1

### History

The first operating system was created by General Motors in 1956 to run a single IBM central computer. In the 1960s, IBM was the first computer manufacturer to take on the task of developing operating systems and began distributing operating systems included in its computers.

The first operating systems were developed in the 1950s, when computers could only run one program at a time. Later in the following decades, computers began to include more and more software programs, sometimes called libraries, that came together to create the start of today’s operating systems.

### What is a Process?
A process is a program in execution. Process is not as same as program code but a lot more than it. A process is an 'active' entity as opposed to program which is considered to be a 'passive' entity. Attributes held by process include hardware state, memory, CPU etc.

Process memory is divided into four sections for efficient working :

The Text section is made up of the compiled program code, read in from non-volatile storage when the program is launched.
The Data section is made up the global and static variables, allocated and initialized prior to executing the main.
The Heap is used for the dynamic memory allocation, and is managed via calls to new, delete, malloc, free, etc.
The Stack is used for local variables. Space on the stack is reserved for local variables when they are declared.

### Different Process States
Processes in the operating system can be in any of the following states:

NEW- The process is being created.
READY- The process is waiting to be assigned to a processor.
RUNNING- Instructions are being executed.
WAITING- The process is waiting for some event to occur(such as an I/O completion or reception of a signal).
TERMINATED- The process has finished execution.

### What is a Thread?
A thread is a path of execution within a process. A process can contain multiple threads.

### Why Multithreading?
A thread is also known as lightweight process. The idea is to achieve parallelism by dividing a process into multiple threads. For example, in a browser, multiple tabs can be different threads. MS Word uses multiple threads: one thread to format the text, another thread to process inputs, etc. More advantages of multithreading are discussed below

### Process vs Thread?
The primary difference is that threads within the same process run in a shared memory space, while processes run in separate memory spaces.
Threads are not independent of one another like processes are, and as a result threads share with other threads their code section, data section, and OS resources (like open files and signals). But, like process, a thread has its own program counter (PC), register set, and stack space.

## Note 
ps command docs : `http://linuxcommand.org/lc3_man_pages/ps1.html` 
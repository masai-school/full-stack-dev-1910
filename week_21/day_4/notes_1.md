## Week 21 - Day 4

### Notes

#### Deadlocks
A process in operating systems uses different resources and uses resources in following way.
1) Requests a resource
2) Use the resource
2) Releases the resource

Deadlock is a situation where a set of processes are blocked because each process is holding a resource and waiting for another resource acquired by some other process.
Consider an example when two trains are coming toward each other on same track and there is only one track, none of the trains can move once they are in front of each other. Similar situation occurs in operating systems when there are two or more processes hold some resources and wait for resources held by other(s). For example, in the below diagram, Process 1 is holding Resource 1 and waiting for resource 2 which is acquired by process 2, and process 2 is waiting for resource 1.

Deadlock can arise if following four conditions hold simultaneously (Necessary Conditions)
- Mutual Exclusion: One or more than one resource are non-sharable (Only one process can use at a time)
- Hold and Wait: A process is holding at least one resource and waiting for resources.
- No Preemption: A resource cannot be taken from a process unless the process releases the resource.
- Circular Wait: A set of processes are waiting for each other in circular form.

#### Cron Jobs

Cron is a scheduling daemon that executes tasks at specified intervals. These tasks are called cron jobs and are mostly used to automate system maintenance or administration.

For example, you could set a cron job to automate repetitive tasks such as backing up databases or data, updating the system with the latest security patches, checking the disk space usage, sending emails, and so on.

The cron jobs can be scheduled to run by a minute, hour, day of the month, month, day of the week, or any combination of these.

```
* * * * * command(s)
- - - - -
| | | | |
| | | | ----- Day of week (0 - 7) (Sunday=0 or 7)
| | | ------- Month (1 - 12)
| | --------- Day of month (1 - 31)
| ----------- Hour (0 - 23)
------------- Minute (0 - 59)

```

#### Chmod

When we type `ls -l` we get strings that correspond to the octal numbers used in chmod commands. For example:

This output in `ls -l`	could be set with this chmod command:
```
-rw-r--r--	chmod 644 filename
drwxr-xr-x	chmod 755 dirname
-rw-------	chmod 600 filename
```

The meanings are:
```
octal digit | rwx format    | meaning
0           |   ---         | no permission
1           |   --x         | execute
2           |   -w-         | write
3           |   -wx         | write and execute
4           |   r--         | read only
5           |   r-x         | read and execute
6           |   rw-         | read and write
7           |   rwx         | read write and execute
```

The three digits in an octal number have different meanings depending on their positions.

```
UGO = User, Group, Other
777 = "-rwxrwxrwx" = rwx for all
754 = "-rwxr-xr--" = rwx for owner of the file, r-x for group, r-- for other
124 = "---x-w-r--" = x for owner of the file, w for group, r for other
```
while True:
    t = input("Title: ")
    a = input("Author(s): ")
    i = input("DDC: ")
    
    file = open("bookshelf.md", "a")
    file.write(f"{t}\n- {a}\n- {i}\n\n")
    file.close()

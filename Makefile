all: index.html

index.html: resume.md styles/styles.css
	pandoc -s -c styles/styles.css -f markdown -t html -o index.html resume.md
clean:
	rm -f index.html Kenny-Collings-resume.pdf Kenny-Collings-resume.docx

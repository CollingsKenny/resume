all: index.html Kenny-Collings-resume.pdf Kenny-Collings-resume.docx

index.html: src/resume.md src/styles.css
	pandoc -s -c src/styles.css -f markdown -t html -o index.html src/resume.md

Kenny-Collings-resume.pdf: index.html
	wkhtmltopdf --enable-local-file-access index.html Kenny-Collings-resume.pdf 

Kenny-Collings-resume.docx: src/resume.md
	pandoc -s -f markdown -t docx -o Kenny-Collings-resume.docx src/resume.md

clean:
	rm -f index.html Kenny-Collings-resume.pdf Kenny-Collings-resume.docx
